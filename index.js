const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const server = express();

server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, "static")));
server.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url} at ${new Date().toTimeString()}`);
    next();
});

server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "homepage.html"));
});

server.listen(80, console.log("Server started"));
