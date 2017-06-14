"use strict";

(function (app) {
    const component = ng.core
        .Component({
            selector: "hello",
            template: "<p>{{ greeting }} world! {{ greetingFromJSON }}</p>"
        })
        .Class({
            constructor: [ng.http.Http, function Hello(http) {
                const vm = this;

                vm.greeting = "Hello";
                vm.greetingFromJSON = "n.a.";

                activate();

                function activate() {
                    const rx = http.get("app/greetings.json").share();

                    rx.subscribe(res => {
                        const greetings = res.json();

                        vm.greetingFromJSON = greetings.hello;
                    });
                }
            }]
        });

    app.HelloModule = ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule, ng.http.HttpModule],
        declarations: [component],
        bootstrap: [component]
    }).Class({
        constructor: function constructor() {}
    });

}(window.app || (window.app = {})));
