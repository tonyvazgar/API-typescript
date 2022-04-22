
// const express = require("express");              //ESTO SOLO ES EN NODEJS
import express, { Express, Request, Response } from "express";

console.log("hola desde Ts! :)");

const PORT: number | string = 3000;
const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send({
        "message": "Esto es desde TypeScrip!!!! :)"
    });
});

app.listen(PORT, () => {
    console.log(`Escuchando en http://localhost:${PORT}`);
});