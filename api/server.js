const express = require("express");

const carsRouter = require("./cars/cars-router");

const server = express();

server.use(express.json());

const { logger, notFound, errorHandling } = require("./middleware/middleware");

server.use("/", logger);

server.get("/", (req, res) => {
  res.status(200).json({
    api: "up",
  });
});

server.use("/api/cars", carsRouter);


server.use("*", notFound);

server.use(errorHandling);

module.exports = server;
