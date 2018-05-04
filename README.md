# Angular JumpStart with ES2015

The goal of this jumpstart app is to provide a simple way to get started with
Angular using ES2015.

## Demo

- [6.x - Live Demo on StackBlitz](https://stackblitz.com/edit/angularjs-irc-starter-lxx5bx)
- [5.x - Live Demo on StackBlitz](https://stackblitz.com/edit/angularjs-irc-starter-gskpun)
- [5.x - Integration between AngularJS and Angular](https://stackblitz.com/edit/ngupgradelite-playground)

## Features

- Bootstrapping the app and the components
- Using custom components
- Defining properties and using events in components
- Defining routes
- Using the Http object for Ajax calls
- Using data binding syntax

## Note

Live demo contains `main.ts` and not `main.js`, because we need to 
create the automatic bundling machinery for StackBlitz.

Indeed the js code is the same.

## Notes about Angular 5.x

- [perf(core): Remove decorator DSL which depends on Reflect](https://github.com/angular/angular/commit/cac130eff9b9cb608f2308ae40c42c9cd1850c4d#diff-635fe23be5795132e3385c8f4899dc3a)
- [Compiler: Native ES6 support for JIT and AOT](https://github.com/angular/angular/issues/15127)

## Notes about Angular 4.x

- Before Angular `5.x`, Angular provided a DSL, via `reflect-metadata`,  to code 
in ES5 or ES2015 (see [tag 4.4.6](https://github.com/albertosantini/angular2-es5-jumpstart/tree/4.4.6)).
