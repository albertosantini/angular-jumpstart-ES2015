"use strict";

(function () {
    angular
        .module("dummy", []);

    const fooS = ng.core
            .Class({
                constructor: [ng.http.Http, function FooService(http) {
                    this.http = http;
                }],
                getFoo() {
                    return this.http.get("app/greetings.json").map(
                        res => res.json()
                    ).toPromise();
                }
            });

    const module2 = ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule, ng.http.HttpModule],
        providers: [fooS]
    })
    .Class({
        constructor: function constructor() {}
    });

    const upgradeAdapter = new ng.upgrade.UpgradeAdapter(module2);

    angular.element(document.body).ready(() => {
        upgradeAdapter.bootstrap(document.body, ["dummy"]);
    });

    angular.module("dummy")
        .factory("FooService",
            upgradeAdapter.downgradeNg2Provider(fooS));

    angular.module("dummy")
        .component("foo", {
            template: "<p>{{ $ctrl.hello }} from mix Angular 1 and Angular 2</p>",
            controller(FooService) {
                const vm = this;

                FooService.getFoo().then(foos => {
                    vm.hello = foos.hello;
                });
            }
        });
}());
