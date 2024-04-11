//import http from "http";
//import expressApp from "./app";
//import mongodb from "./db/connect";
//import dotenv from "dotenv";

const http = require("http");
const expressApp = require("./app");
const mongodb = require("./db/connect");
const dotenv = require("dotenv");
const cors = require('cors')
dotenv.config();

let port;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== "test") {
    port = process.env.PORT || 8080;
} else {
    port = 0;
}
const server = http.createServer(expressApp);

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        server.listen(port);
        console.log(`Connected to DB and listening on port ${port}`);
    }
});
