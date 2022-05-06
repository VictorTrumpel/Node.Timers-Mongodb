require("dotenv").config();
const cookieParser = require("cookie-parser");
const router = require("./router/router");
const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  tags: {
    blockStart: "[%",
    blockEnd: "%]",
    variableStart: "[[",
    variableEnd: "]]",
    commentStart: "[#",
    commentEnd: "#]",
  },
});

app.set("view engine", "njk");
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.use(router);

app.listen(3000);

module.exports = app;
