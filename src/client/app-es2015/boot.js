import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import "core-js/es6/reflect";
import "core-js/es7/reflect";
import "zone.js/dist/zone";

class AppModule {

    // ngDoBootstrap() {}
}

AppModule.annotations = [
    new NgModule({
        imports: [BrowserModule]
    })
];

platformBrowserDynamic().bootstrapModule(AppModule);

// platformBrowserDynamic().bootstrapModule(AppModule.then(platformRef => {
//     const upgrade = platformRef.injector.get(UpgradeModule);

//     upgrade.bootstrap(document.body, ["app"], { strictDi: true });
// });
