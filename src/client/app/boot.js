"use strict";

(function (app) {
    document.addEventListener("DOMContentLoaded", function () {
        ng.platformBrowserDynamic.bootstrap(app.AppComponent);
        ng.platformBrowserDynamic.bootstrap(app.DisplayComponent);
        ng.platformBrowserDynamic.bootstrap(app.HelloComponent);
        ng.platformBrowserDynamic.bootstrap(app.MyRoutes);
    });
}(window.app || (window.app = {})));
