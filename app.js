const express = require("express");
const path = require("path");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sassMiddleware = require("node-sass-middleware");
const apiCtrl = require("./api/api");
const routes = require("./routes");

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

app.get(/.*\.view/, (req, res) => {
  //res.writeHead(200, { "Set-Cookie": "test=text" });
  //res.end(JSON.stringify(req.cookies));
  if (routes.includes(req.originalUrl)) {
    res.writeHead(200, { "Content-Type": "text/html" });
    let stream = fs.createReadStream(path.join("public", "index.html"), "utf-8");
    stream.pipe(res);
  } else {
    handleError(res, 404, "Page is not found!");
  }
});

app.use(/^.*$/, (req, res) => {
  handleError(res, 404, "Page is not found!");
});

function handleError(res, code, message) {
  res.writeHead(code, { "Content-Type": "text/html" });
  res.end(`<h1>Error ${code}! ${message}</h1>`);
}

module.exports = app;
