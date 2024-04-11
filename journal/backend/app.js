//import express from "express";
//import bodyParser from "body-parser";
//import router from "./routes";

const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const cors = require('cors')
const app = express();

app
    .use(cors())
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        next();
    })
    .use("/", require("./routes"));

process.on("uncaughtException", (err, origin) => {
    console.log(
        process.stderr.fd,
        `Caught exception: ${err}\n` + `Exception origin: ${origin}`
    );
});

module.exports = app;