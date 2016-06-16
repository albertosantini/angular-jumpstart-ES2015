"use strict";

(function (app) {
    app.View1 = ng.core
        .Component({
            template: "<p>View {{ viewName }} loaded with the router</p>"
        })
        .Class({
            constructor: [function Start() {
                this.viewName = "View1";
            }]

        });

}(window.app || (window.app = {})));

(function (app) {
    app.MyRoutes = ng.core
        .Component({
            selector: "my-routes",
            viewProviders: [ng.router_deprecated.ROUTER_PROVIDERS],
            directives: [ng.router_deprecated.ROUTER_DIRECTIVES],
            template: "<router-outlet></router-outlet>"
        })
        .Class({
            constructor: function () {}
        });

}(window.app || (window.app = {})));

(function (app) {
    ng.router_deprecated
        .RouteConfig([
            { path: "/", component: app.View1 }
        ])(app.MyRoutes);

}(window.app || (window.app = {})));
