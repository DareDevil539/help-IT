const express = require("express");
const path = require("path");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sassMiddleware = require("node-sass-middleware");
const apiCtrl = require("./api/api");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  sassMiddleware({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.use(/\/api/, apiCtrl);

app.use(/.*\.view/, (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  let stream = fs.createReadStream(path.join("public", "index.html"), "utf-8");
  stream.pipe(res);
});

module.exports = app;
