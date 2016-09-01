"use strict";

(function (app) {
    var component;

    component = ng.core
        .Component({
            selector: "hello",
            template: "<p>{{ greeting }} world! {{ greetingFromJSON }}</p>"
        })
        .Class({
            constructor: [ng.http.Http, function Hello(http) {
                var vm = this;

                vm.greeting = "Hello";
                vm.greetingFromJSON = "n.a.";

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

    app.HelloModule = ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule, ng.http.HttpModule],
        declarations: [component],
        bootstrap: [component]
    })
    .Class({
        constructor: function () {}
    });

}(window.app || (window.app = {})));
