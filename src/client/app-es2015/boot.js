import "core-js/shim";
import "reflect-metadata";
import "zone.js/dist/zone";

import { NgModule, Component, VERSION, enableProdMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpClientModule } from "@angular/common/http";

// import { HttpClientModule, HttpClient } from "@angular/common/http";

class AppComponent {
    constructor() {
        this.version = VERSION.full;
    }
}
AppComponent.annotations = [
    new Component({
        selector: "app",
        template: "<h1>App with Angular {{ version }}</h1>"
    })
];

class AppModule {

    // ngDoBootstrap() {}
}

AppModule.annotations = [
    new NgModule({
        imports: [BrowserModule, HttpClientModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
];

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);

// platformBrowserDynamic().bootstrapModule(AppModule.then(platformRef => {
//     const upgrade = platformRef.injector.get(UpgradeModule);

//     upgrade.bootstrap(document.body, ["app"], { strictDi: true });
// });
