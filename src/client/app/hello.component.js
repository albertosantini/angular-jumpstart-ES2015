"use strict";

(function (app) {

    app.HttpService = ng.core
        .Class({
            constructor: function () {},
            http: function () {
                return new ng.http.Http(
                        new ng.http.XHRBackend(
                            new ng.http.BrowserXhr()),
                    new ng.http.RequestOptions());
            }
        });

}(window.app || (window.app = {})));

(function (app) {

    app.HelloComponent = ng.core
        .Component({
            selector: "hello",
            bindings: [app.HttpService]
        })
        .View({
            template: "{{ greeting }} world! {{ greetingFromJSON }}"
            // templateUrl: "hello.html"
        })
        .Class({
            constructor: [app.HttpService, function Hello(httpService) {
                var vm = this;

                vm.greeting = "Hello";
                vm.greetingFromJSON = "n.a";

                activate();

                function activate() {
                    var rx = httpService.http()
                                .get("/src/client/app/greetings.json").share();

                    rx.subscribe(function (res) {
                        var greetings = res.json();

                        vm.greetingFromJSON = greetings.hello;
                    });
                }
            }]
        });

}(window.app || (window.app = {})));
