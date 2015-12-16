"use strict";

(function (app) {
    app.AppComponent = ng.core
        .Component({
            selector: "my-app",
            template: "<h1>My First Angular 2 (2.0.0-beta.0) App</h1>"
        })
        .Class({
            constructor: function () {}
        });
}(window.app || (window.app = {})));
