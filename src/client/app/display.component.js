"use strict";

(function (app) {

    function FriendsS() {}
    FriendsS.prototype.getNames = function () {
        return ["Aaren", "Martin", "Shannon", "Ariana", "Kai"];
    };

    app.DisplayComponent = ng.core
        .Component({
            selector: "display",
            bindings: [FriendsS]
        })
        .View({
            directives: [ng.common.NgFor],
            template:
                "<p>My name: {{ me }}" +
                "<p>Friends:</p>" +
                "<ul>" +
                "<li *ngFor='#name of names'>{{ name }}</li>" +
                "</ul>" +
                "<button (click)='theAnswer(42)'>And the answer is...</button>"
        })
        .Class({
            constructor: [FriendsS, function Display(friendsSrv) {
                this.me = "Alice";
                this.names = friendsSrv.getNames();
            }],

            theAnswer: function (res) {
                alert(res);
            }
        });

}(window.app || (window.app = {})));
