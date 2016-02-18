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
            providers: [ng.router.ROUTER_PROVIDERS]
        })
        .View({
            directives: [ng.router.ROUTER_DIRECTIVES],
            template: "<router-outlet></router-outlet>"
        })
        .Class({
            constructor: function () {}
        });

}(window.app || (window.app = {})));

(function (app) {
    ng.router
        .RouteConfig([
            { path: "/", component: app.View1 }
        ])(app.MyRoutes);

}(window.app || (window.app = {})));
