const http = require("http");
const fs = require("fs");
var connect = require("connect");
var express = require("express");
const hostname = "0.0.0.0";
const port = 3000;

let rawdata = fs.readFileSync("mock.json");
let testJson = JSON.parse(rawdata);

var app = express();
app.get("/", function (req, res) {
  res.send(testJson);
});
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`${hostname}:${port}`);
});
