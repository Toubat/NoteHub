const path = require("path");

const express = require("express");

const cors = require("cors");

const morgan = require("morgan");

const csrf = require("csurf");

const cookieParser = require("cookie-parser");

const admin = require("firebase-admin");

const apiRouter = require("./routes/api.router");

require("dotenv").config();

const connection = require("./models/database");

const app = express();

app.use(
  cors({
    origin: "http://localhost:8081",
  })
);

// logging in Apache combined standard

app.use(morgan("combined"));

// recognize the incoming Request Object as a JSON Object.

// parse requests of content-type - application/x-www-form-urlencoded

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

//const csrfMiddleware = csrf({ cookie: true });

//app.use(csrfMiddleware);

// The build folder for storing static files generated by Vue

app.use(express.static(path.join(__dirname, "..", "public")));

// Swagger: a API documentation tool

app.all("*", (req, res, next) => {
  //res.cookie("XSRF-TOKEN", req.csrfToken());

  next();
});

//routes to api

app.use("/api", apiRouter);

app.get("/*", (req, res, next) => {
  console.log(req);
  if (
    req.url === "/test123" ||
    req.url.match(/^\/websocket\/.+/) !== null ||
    req.upgrade === true
  ) {
    return next();
  }
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = { app };
