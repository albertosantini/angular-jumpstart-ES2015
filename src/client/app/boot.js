"use strict";

(function (app) {
    document.addEventListener("DOMContentLoaded", function () {
        ng.platform.browser.bootstrap(app.AppComponent);
        ng.platform.browser.bootstrap(app.DisplayComponent);
        ng.platform.browser.bootstrap(app.HelloComponent);
    });
}(window.app || (window.app = {})));
