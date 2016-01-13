"use strict";

(function (app) {
    document.addEventListener("DOMContentLoaded", function () {
        ng.platform.browser.bootstrap(app.AppComponent);
        ng.platform.browser.bootstrap(app.DisplayComponent);
        ng.platform.browser.bootstrap(app.HelloComponent);
        ng.platform.browser.bootstrap(app.MyRoutes);
    });
}(window.app || (window.app = {})));
