# Angular JumpStart with ES5
[![Build Status](https://travis-ci.org/albertosantini/angular2-es5-jumpstart.png)](https://travis-ci.org/albertosantini/angular2-es5-jumpstart)


The goal of this jumpstart app is to provide a simple way to get started with
Angular while also showing several key Angular features. The sample relies
on ES5.

## Installation and running

- Firstly clone the project or download and extract the .zip to get started.

Then in the folder project:

- `npm install`
- `npm start`

## Notes about Angular 5.x

- [perf(core): Remove decorator DSL which depends on Reflect](https://github.com/angular/angular/commit/cac130eff9b9cb608f2308ae40c42c9cd1850c4d#diff-635fe23be5795132e3385c8f4899dc3a)

```
This format would only work with JIT and with ES5. This mode doesn’t
allow build tools like Webpack to process and optimize the code, which
results in prohibitively large bundles. We are removing this API
because we are trying to ensure that everyone is on the fast path by
default, and it is not possible to get on the fast path using the ES5
DSL. The replacement is to use TypeScript and `@Decorator` format.
```

- [Compiler: Native ES6 support for JIT and AOT](https://github.com/angular/angular/issues/15127)

```
Why do you think this? The output of the compiler is of no consequence to other parts of the application. The problem with JIT is. that it demands a browser with full ES2015 support. While way more common now, there might be edge cases creeping up here.
I know there are some nuances here that I ignored, but AFAIK those are just of influence on angular itself, not on the other stuff you load into your app.
```


## Features

- Bootstrapping the app and the components
- Using custom components
- Defining properties and using events in components
- Defining routes
- Using the Http object for Ajax calls
- Using data binding syntax
- Mixing AngularJS and Angular

## Resources and Credits

- [Angular Quickstart](https://angular.io/docs/js/latest/quickstart.html)
- [Angular 5 min Tutorial](https://angular.io/docs/ts/latest/tutorial/)
- [Angular Cookbook](https://v2.angular.io/docs/js/latest/cookbook/ts-to-js.html)
- [Angular Javascript Documentation](https://github.com/angular/angular/issues/19126#issuecomment-328370140)
- [Writing An Angular2 Component in Today’s JavaScript (ES5)](http://gurustop.net/blog/2015/12/16/angular2-beta-javascript-component)
- [Seed project for Angular 2 apps with statically typed build](https://github.com/mgechev/angular2-seed)
- [Angular 2 JumpStart with TypeScript](https://github.com/DanWahlin/Angular2-JumpStart)
- [Adding the first Angular 2 service to your Angular 1 app](http://www.codelord.net/2016/01/07/adding-the-first-angular-2-service-to-your-angular-1-app/)
- [Angular 2 with Handcrafted Tools](http://onehungrymind.com/build-angular-2-app-es5/)
