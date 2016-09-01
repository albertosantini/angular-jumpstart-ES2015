"use strict";

(function (app) {
    var component = ng.core
        .Component({
            selector: "my-app",
            template: "<h1>My First Angular 2 App</h1>"
        })
        .Class({
            constructor: function () {}
        });

    app.AppModule = ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule],
        declarations: [component],
        bootstrap: [component]
    })
    .Class({
        constructor: function () {}
    });
}(window.app || (window.app = {})));
