const express = require("express");
const helmet = require("helmet");

const apiRouter = require("./api-router.js");

const server = express();

server.use(express.json())

server.use(helmet());

server.use("/api", apiRouter);

server.get("/", (req, res) => {
    res.status(200).json({ hello: "there... General Kenobi" });
});

// Here's my middleware
server.use(function(req, res) {
    res.status(404).send("Uh oh something went wrong!");
});

module.exports = server;