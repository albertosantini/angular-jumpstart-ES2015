"use strict";

(function () {
    angular
        .module("dummy", []);

    var fooS = ng.core
            .Class({
                constructor: [ng.http.Http, function FooService(http) {
                    this.http = http;
                }],
                getFoo: function () {
                    return this.http.get("/src/client/app/greetings.json").map(
                        function (res) {
                            return res.json();
                        }
                    ).toPromise();
                }
            });

    var module2 = ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule, ng.http.HttpModule],
        providers: [fooS]
    })
    .Class({
        constructor: function () {}
    });

    var upgradeAdapter = new ng.upgrade.UpgradeAdapter(module2);

    angular.element(document.body).ready(function () {
        upgradeAdapter.bootstrap(document.body, ["dummy"]);
    });

    angular.module("dummy")
        .factory("FooService",
            upgradeAdapter.downgradeNg2Provider(fooS));

    angular.module("dummy")
        .component("foo", {
            template: "<p>{{ $ctrl.hello }} from mix Angular 1 and Angular 2</p>",
            controller: function (FooService) {
                var vm = this;

                FooService.getFoo().then(function (foos) {
                    vm.hello = foos.hello;
                });
            }
        });
}());
