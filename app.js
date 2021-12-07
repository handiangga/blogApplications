"use strict";

const express = require("express");
// const errorHandler = require("./middlewares/errorHandler");
// const router = require("./routes/index");
const app = express();
const port = process.env.PORT || 3000;
const { connect } = require("./config/mongodb");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(router);
// app.use(errorHandler);
connect();

app.listen(port, function () {
  console.log("running " + port);
});
