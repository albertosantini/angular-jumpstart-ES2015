var path = require("path");
var express = require("express");

var app = express();

app.use("/", express.static(path.join(__dirname, "src/client")));
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

app.listen(8000, function () {
    console.log("Listening on http://localhost:8000");
});
