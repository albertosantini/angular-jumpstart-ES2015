"use strict";
(function () {
    // fix for a regression in rx 5.0.0-beta.11
    var obsProto = window.Rx.Observable.prototype;

    obsProto._catch = obsProto.catch;
}());

(function (app) {
    app.View1 = ng.core
        .Component({
            template: "<p>View {{ viewName }} loaded with the router</p>"
        })
        .Class({
            constructor: function () {
                this.viewName = "View1";
            }
        });

}(window.app || (window.app = {})));

(function (app) {
    var component = ng.core
        .Component({
            selector: "my-routes",
            template: "<h1>My routes</h1><router-outlet></router-outlet>"
        })
        .Class({
            constructor: function () {}
        });

    var routing = ng.router.RouterModule.forRoot([
        { path: "", component: app.View1 }
    ]);

    app.MyRoutesModule = ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule, routing],
        declarations: [component, app.View1],
        bootstrap: [component]
    })
    .Class({
        constructor: function () {}
    });

}(window.app || (window.app = {})));
