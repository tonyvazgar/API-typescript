import "dotenv/config";
import cors from "cors";
import dbConnect from "./config/mongo";
import swaggerUI from "swagger-ui-express";
import openAPIconfiguration from "./docs/swagger";
import express, { Express, Request, Response } from "express";

const ENGINE_DB = process.env.ENGINE_DB;
const NODE_ENV = process.env.NODE_ENV || "development";
const PORT: number | string = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

app.get("/", (req: Request, res: Response) => {
    res.redirect("/documentation");
});

app.use("/documentation", swaggerUI.serve, swaggerUI.setup(openAPIconfiguration));


app.listen(PORT, () => {
    console.log(`Escuchando en http://localhost:${PORT}`);
});

dbConnect().then(() => {
    console.log("Conexion a MongoDB correcta :)");
});