"use strict";

(function (app) {
    function FriendsS() {
        this.names = ["Aaren", "Martin", "Shannon", "Ariana", "Kai"];
    }

    FriendsS.prototype.getNames = function () {
        return this.names;
    };

    FriendsS.prototype.addName = function (name) {
        this.names.push(name);
    };

    FriendsS.prototype.addAsyncName = function (name) {
        setTimeout(() => {
            this.names.push(name);
        }, 1000);
    };

    const component = ng.core
        .Component({
            selector: "display",
            viewProviders: [FriendsS],
            directives: [ng.common.NgFor],
            templateUrl: "app/display.component.html"
        })
        .Class({
            constructor: [FriendsS, function Display(friendsSrv) {
                this.friendsSrv = friendsSrv;

                this.me = "Alice";
                this.names = this.friendsSrv.getNames();
            }],

            addFriend(name) {
                this.friendsSrv.addName(name);
            },

            addAsyncFriend(name) {
                this.friendsSrv.addAsyncName(name);
            }
        });

    app.DisplayModule = ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule],
        declarations: [component],
        bootstrap: [component]
    })
    .Class({
        constructor: function constructor() {}
    });


}(window.app || (window.app = {})));
