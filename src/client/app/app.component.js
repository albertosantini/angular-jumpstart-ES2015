"use strict";

(function (app) {
    const component = ng.core
        .Component({
            selector: "my-app",
            template: "<h1>My First Angular 2 App</h1>"
        })
        .Class({
            constructor: function constructor() {}
        });

    app.AppModule = ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule],
        declarations: [component],
        bootstrap: [component]
    })
    .Class({
        constructor: function constructor() {}
    });
}(window.app || (window.app = {})));
