"use strict";

const path = require("path");
const express = require("express");

const app = express();

app.use("/", express.static(path.join(__dirname, "src/client")));
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use("/build", express.static(path.join(__dirname, "build")));

app.listen(8000, () => {

    /* eslint no-console: "off"*/
    console.log("Listening on http://localhost:8000");
});
