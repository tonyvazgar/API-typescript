import swaggerJsdoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

/**
 * API Config info
 */
const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.0",
    info: {
        title: "Mi primera documentacion de mi API_Rest con Node.js",
        version: "1.0.0",
    },
    servers: [
        {
            url: "http://localhost:3000/api"
        },
        {
            url: "https://shielded-scrubland-77049.herokuapp.com/api"
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer"
            }
        },
        schemas: {
            authLogin: {
                type: "object",
                required: ["email", "password"],
                properties: {
                    email: {
                        type: "string"
                    },
                    password: {
                        type: "string"
                    }
                }
            },
            authRegister: {
                type: "object",
                required: ["name", "age", "email", "password"],
                properties: {
                    name: {
                        type: "string"
                    },
                    age: {
                        type: "integer"
                    },
                    email: {
                        type: "string"
                    },
                    password: {
                        type: "string"
                    },

                }
            },
            track: {
                type: "object",
                required: ["name", "album", "cover", "artist", "duration", "mediaId"],
                properties: {
                    name: {
                        type: "string"
                    },
                    album: {
                        type: "string"
                    },
                    cover: {
                        type: "string"
                    },
                    artist: {
                        type: "object",
                        properties: {
                            name: {
                                type: "string"
                            },
                            nickname: {
                                type: "string"
                            },
                            nationality: {
                                type: "string"
                            }
                        }
                    },
                    duration: {
                        type: "object",
                        properties: {
                            start: {
                                type: "integer"
                            },
                            end: {
                                type: "integer"
                            }
                        }
                    },
                    mediaId: {
                        type: "string"
                    }
                }
            },
            storage: {
                type: "object",
                properties: {
                    url: {
                        type: "string"
                    },
                    filename: {
                        type: "string"
                    }
                }
            },
            users: {
                type: "object",
                required: [""],
                properties: {
                    name: {
                        type: "string"
                    },
                    age: {
                        type: "integer"
                    },
                    email: {
                        type: "string"
                    },
                    password: {
                        type: "string"
                    },
                    role: {
                        type: "enum",
                        cases: [
                            "user",
                            "admin"
                        ]
                    }
                }
            }
        }
    }
};


/**
 * Opciones
 */
const options: OAS3Options = {
    swaggerDefinition,
    apis: [
        "./routes/*.js"
    ]
};

const openAPIconfiguration = swaggerJsdoc(options);
// module.exports = openAPIconfiguration;
export default openAPIconfiguration;