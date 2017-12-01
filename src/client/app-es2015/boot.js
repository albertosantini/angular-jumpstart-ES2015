import "core-js/shim";
import "reflect-metadata";
import "zone.js/dist/zone";

import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

class FooComponent {
    constructor() {
        this.message = "Hello World";
    }
}

FooComponent.annotations = [
    new Component({
        selector: "app",
        template: "<h1>Foo Component - {{ message }}</h1>"
    })
];

class AppModule {

    // ngDoBootstrap() {}
}

AppModule.annotations = [
    new NgModule({
        imports: [BrowserModule],
        declarations: [FooComponent],
        bootstrap: [FooComponent]
    })
];

platformBrowserDynamic().bootstrapModule(AppModule);

// platformBrowserDynamic().bootstrapModule(AppModule.then(platformRef => {
//     const upgrade = platformRef.injector.get(UpgradeModule);

//     upgrade.bootstrap(document.body, ["app"], { strictDi: true });
// });
