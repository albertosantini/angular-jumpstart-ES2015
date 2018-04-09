# Angular JumpStart with ES2015

The goal of this jumpstart app is to provide a simple way to get started with
Angular using ES2015.

## Demo

- [Live Demo on Stackblitz](https://stackblitz.com/edit/angularjs-irc-starter-qifuew)
- [Integration between AngularJS and Angular](https://stackblitz.com/edit/ngupgradelite-playground)

## Features

- Bootstrapping the app and the components
- Using custom components
- Defining properties and using events in components
- Defining routes
- Using the Http object for Ajax calls
- Using data binding syntax

## Notes

- Stackblitz demo contains `main.ts` and not `main.js`, because we need to 
create the automatic bundling machinery. Indeed the code would be the same

- Before Angular `5.x`, due to the presence of `reflect-metadata`, Angular 
provided a DSL to code in ES5 or ES2015 (see [tag 4.4.6](https://github.com/albertosantini/angular2-es5-jumpstart/tree/4.4.6))

## Notes about Angular 5.x

- [perf(core): Remove decorator DSL which depends on Reflect](https://github.com/angular/angular/commit/cac130eff9b9cb608f2308ae40c42c9cd1850c4d#diff-635fe23be5795132e3385c8f4899dc3a)
- [Compiler: Native ES6 support for JIT and AOT](https://github.com/angular/angular/issues/15127)
