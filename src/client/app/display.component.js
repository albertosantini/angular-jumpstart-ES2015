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
        var that = this;

        setTimeout(function () {
            that.names.push(name);
        }, 1000);
    };

    app.DisplayComponent = ng.core
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

            addFriend: function (name) {
                this.friendsSrv.addName(name);
            },

            addAsyncFriend: function (name) {
                this.friendsSrv.addAsyncName(name);
            }
        });

}(window.app || (window.app = {})));
