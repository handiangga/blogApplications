"use strict";

const express = require("express");
const router = require("./routes/index");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const port = process.env.PORT || 3000;
const { connect } = require("./config/mongodb");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.use(errorHandler);
connect();

app.listen(port, function () {
  console.log("running " + port);
});
