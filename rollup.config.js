"use strict";

const nodeResolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");

module.exports = {
    input: "./src/client/app-es2015/boot.js",
    output: {
        file: "./build/app.bundle.js",
        format: "iife"
    },
    name: "app",
    plugins: [
        nodeResolve(),
        commonjs({

            // Make it possible to find these individual intra-package files
            include: [
                "node_modules/core-js/**",
                "node_modules/zone.js/**",
                "node_modules/rxjs/**"
            ]
        })
    ]
};
