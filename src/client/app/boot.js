"use strict";

(function (app) {
    document.addEventListener("DOMContentLoaded", () => {
        ng.platformBrowserDynamic
            .platformBrowserDynamic()
            .bootstrapModule(app.AppModule);
        ng.platformBrowserDynamic
            .platformBrowserDynamic()
            .bootstrapModule(app.DisplayModule);
        ng.platformBrowserDynamic
            .platformBrowserDynamic()
            .bootstrapModule(app.HelloModule);
        ng.platformBrowserDynamic
            .platformBrowserDynamic()
            .bootstrapModule(app.MyRoutesModule);
    });
}(window.app || (window.app = {})));
