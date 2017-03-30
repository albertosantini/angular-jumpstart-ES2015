"use strict";

const nodeResolve = require("@oasisdigital/rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");

module.exports = {
    entry: "./src/client/app-es2015/boot.js",
    dest: "./build/app.bundle.js",
    format: "iife",
    moduleName: "app",
    plugins: [
        nodeResolve({
            es2015: true,  // Use new Angular es2015.
            module: false, // Skip the ES5-in-ES2015 modules we aren"t using.
            browser: true  // Not needed for this example, needed for certain libs
        }),
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
