"use strict";

(function (app) {

    app.HelloComponent = ng.core
        .Component({
            selector: "hello",
            viewProviders: [ng.http.HTTP_PROVIDERS],
            template: "<p>{{ greeting }} world! {{ greetingFromJSON }}</p>"
        })
        .Class({
            constructor: [ng.http.Http, function Hello(http) {
                var vm = this;

                vm.greeting = "Hello";
                vm.greetingFromJSON = "n.a";

                activate();

                function activate() {
                    var rx = http.get("app/greetings.json").share();

                    rx.subscribe(function (res) {
                        var greetings = res.json();

                        vm.greetingFromJSON = greetings.hello;
                    });
                }
            }]
        });

}(window.app || (window.app = {})));
