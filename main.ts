import "zone.js/dist/zone";

import { NgModule, Component, VERSION } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { RouterModule } from "@angular/router";

// simple example

class FooComponent {
    static annotations = [
        new Component({
            selector: "my-app",
            template: "<h1>Angular {{ version }} in ES2015</h1>"
        })
    ];

    constructor() {
        this.version = VERSION.full;
    }
}

class AppModule {
    static annotations = [
        new NgModule({
            imports: [BrowserModule],
            declarations: [FooComponent],
            bootstrap: [FooComponent]
        })
    ];
}

// list example

class FriendsService {
    constructor() {
        this.names = ["Aaren", "Martin", "Shannon", "Ariana", "Kai"];
    }

    getNames() {
        return this.names;
    }

    addName(name) {
        this.names.push(name);
    }

    addAsyncName(name) {
        setTimeout(() => {
            this.names.push(name);
        }, 1000);
    }
}

class ListComponent {
    static annotations = [
        new Component({
            selector: "my-list",
            viewProviders: [FriendsService],
            template: `
                <p>My name: {{ me }}
                <p>Friends:</p>
                <ul>
                <li *ngFor="let name of names">{{ name }}</li>
                </ul>
                <button (click)="addFriend('Foo')">Add Foo friend</button>
                <button (click)="addAsyncFriend('Bar')">Simulate async update</button>
            `
        })
    ];

    static parameters = [FriendsService];

    constructor(friendsService) {
        this.friendsService = friendsService;

        this.me = "Alice";
        this.names = this.friendsService.getNames();
    }

    addFriend(name) {
        this.friendsService.addName(name);
    }

    addAsyncFriend(name) {
        this.friendsService.addAsyncName(name);
    }
}

class ListModule {
    static annotations = [
        new NgModule({
            imports: [BrowserModule],
            declarations: [ListComponent],
            bootstrap: [ListComponent]
        })
    ];
}

// hello example

class HelloComponent {
    static annotations = [
        new Component({
            selector: "my-hello",
            template: "<p>{{ greeting }} world! {{ greetingFromJSON }}</p>"
        })
    ];

    static parameters = [HttpClient];

    constructor(http) {
        this.http = http;

        this.greeting = "Hello";
        this.greetingFromJSON = "n.a.";
    }

    ngOnInit() {
        const url = "https://httpbin.org/get?res={%22hello%22:%20%22Hello%20JSON%20world!!!%22}";
        const rx = this.http.get(url);


        rx.subscribe(res => {
            const greetings = JSON.parse(res.args.res);

            this.greetingFromJSON = greetings.hello;
        });
    }
}

class HelloModule {
    static annotations = [
        new NgModule({
            imports: [BrowserModule, HttpClientModule],
            declarations: [HelloComponent],
            bootstrap: [HelloComponent]
        })
    ];
}

// routes

class View1Component {
    static annotations = [
        new Component({
            template: "<p>{{ viewName }} loaded with the router</p>"
        })
    ];

    constructor() {
        this.viewName = "My View";
    }
}

class MyRoutesComponent {
    static annotations = [
        new Component({
            selector: "my-routes",
            template: "<h2>My routes</h2><router-outlet></router-outlet>"
        })
    ];
}

const routing = RouterModule.forRoot([
    { path: "", component: View1Component }
]);

class MyRoutesModule {
    static annotations = [
        new NgModule({
            imports: [BrowserModule, routing],
            declarations: [MyRoutesComponent, View1Component],
            bootstrap: [MyRoutesComponent]
        })
    ];
}

// boot

platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(ListModule);
platformBrowserDynamic().bootstrapModule(HelloModule);
platformBrowserDynamic().bootstrapModule(MyRoutesModule);
