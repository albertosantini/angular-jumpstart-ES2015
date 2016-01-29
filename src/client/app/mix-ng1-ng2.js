"use strict";

(function () {
    angular
        .module("dummy", []);

    var upgradeAdapter = new ng.upgrade.UpgradeAdapter();

    angular.element(document.body).ready(function () {
        upgradeAdapter.bootstrap(document.body, ["dummy"]);
    });

    upgradeAdapter.addProvider(ng.http.HTTP_PROVIDERS);

    var fooS = ng.core
            .Injectable()
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

    upgradeAdapter.addProvider(fooS);

    angular.module("dummy")
        .factory("FooService",
            upgradeAdapter.downgradeNg2Provider(fooS));

    angular.module("dummy")
        .component("foo", {
            template: "<p>{{ $ctrl.hello }} from mix Angular 1 and Angular 2 </p>",
            controller: function (FooService) {
                var vm = this;

                FooService.getFoo().then(function (foos) {
                    vm.hello = foos.hello;
                });
            }
        });
}());
