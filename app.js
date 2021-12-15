const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const { errHandler } = require("./helpers/errHandler.js");
const { tasksRouter, usersRouter } = require("./api");

require("dotenv").config();

const app = express();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Dashboard API docs",
      description: "API documentation for Dashboard project",
      contact: {
        name: "Ostatok ot deleniia"
      },
      servers: [
        {
          url: "http://localhost:3030"
        }
      ]
    }
  },
  // apis: ["./api/userApi.js"]
  apis: ["./api/*.js"]
  // apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://stupefied-boyd-4fa663.netlify.app");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json");
  next();
});

app.use("/api/users", usersRouter);
app.use("/api/tasks", tasksRouter);

app.use(errHandler);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json(message);
});

module.exports = app;
