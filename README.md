<<<<<<< HEAD
<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/michaeldoye/mat-progress-buttons/master/demo/src/assets/logo.svg">
</p>

# Anguar Material Design Progress Buttons

[![npm version](https://badge.fury.io/js/mat-progress-buttons.svg)](https://badge.fury.io/js/mat-progress-buttons)
[![Build Status](https://travis-ci.org/michaeldoye/mat-progress-buttons.svg?branch=master)](https://travis-ci.org/michaeldoye/mat-progress-buttons)
[![dependency Status](https://david-dm.org/michaeldoye/mat-progress-buttons/status.svg)](https://david-dm.org/michaeldoye/mat-progress-buttons)
[![devDependency Status](https://david-dm.org/michaeldoye/mat-progress-buttons/dev-status.svg?branch=master)](https://david-dm.org/michaeldoye/mat-progress-buttons#info=devDependencies)

## Demo

View all the directives in action at https://mat-progress-buttons.firebaseapp.com

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)
* [Angular Material](https://material.angular.io/)

## Installation
Install above dependencies via *npm*. 

Now install `mat-progress-buttons` via:
```shell
npm install --save mat-progress-buttons
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `mat-progress-buttons`:
```js
map: {
  'mat-progress-buttons': 'node_modules/mat-progress-buttons/bundles/mat-progress-buttons.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { MatProgressButtonsModule } from 'mat-progress-buttons';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` MatProgressButtonsModule .forRoot()`):
```js
import { MatProgressButtonsModule } from 'mat-progress-buttons';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [MatProgressButtonsModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` MatProgressButtonsModule `:

```js
import { MatProgressButtonsModule } from 'mat-progress-buttons';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [MatProgressButtonsModule, ...], 
})
export class OtherModule {
}
```

## Usage

### Spinner Button

```js
import { Component } from '@angular/core';
import { MatProgressButtonOptions } from 'mat-progress-buttons';

@Component({
  selector: 'app-home',
  template: '<mat-spinner-button (click)="btnClick()" [options]="btnOpts"></mat-spinner-button>'
})
export class SomeComponent {

  // Button Options
  btnOpts: MatProgressButtonOptions = {
    active: false,
    text: 'Stroked Button',
    spinnerSize: 19,
    raised: false,
    stroked: true,
    buttonColor: 'accent',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
  };

  // Click handler
  btnClick(): void {
    this.btnOpts.active = true;
    setTimeout(() => {
      this.btnOpts.active = false;
    }, 3350);
  }
};
```

### Bar Button

```js
import { Component } from '@angular/core';
import { MatProgressButtonOptions } from 'mat-progress-buttons';

@Component({
  selector: 'app-home',
  template: '<mat-bar-button (click)="btnClick()" [options]="btnOpts"></mat-bar-button>'
})
export class SomeComponent {

  // Button Options
  btnOpts: MatProgressButtonOptions = {
    active: false,
    text: 'Stroked Button',
    buttonColor: 'accent',
    barColor: 'accent',
    raised: false,
    stroked: true,
    mode: 'indeterminate',
    value: 0,
    disabled: false
  };

  // Click handler
  btnClick(): void {
    this.btnOpts.active = true;
    setTimeout(() => {
      this.btnOpts.active = false;
    }, 3350);
  }
};
```

## License

Copyright (c) 2018 Michael Doye. Licensed under the MIT License (MIT)

=======
# Angular Material Design Progress Buttons 
Very simple Angular6+ Material Design progress buttons


[![Build Status](https://travis-ci.org/michaeldoye/mat-progress-buttons.svg?branch=master)](https://travis-ci.org/michaeldoye/mat-progress-buttons) [![npm version](https://badge.fury.io/js/mat-progress-buttons.svg)](https://www.npmjs.com/package/mat-progress-buttons)  [![GitHub issues](https://img.shields.io/github/issues/michaeldoye/mat-progress-buttons.svg)](https://github.com/michaeldoye/mat-progress-buttons/issues)

## Demo

[**StackBlitz Demo**](https://stackblitz.com/edit/mat-progress-buttons-demo)


## Usage

Import in any Angular application by running:

```bash
$ npm install --save mat-progress-buttons
```

Install Angular Material: ([Getting Started](https://material.angular.io/guide/getting-started))

```bash
$ npm install --save @angular/material @angular/cdk
```

Install Angular Animations:

```bash
npm install --save @angular/animations
```

Import a material theme into your `style.css` file:

```css
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```


Then import `MatProgressButtons` into your `AppModule`:

```typescript
import { MatProgressButtons } from 'mat-progress-buttons';

@NgModule({
  imports: [ MatProgressButtons ]
})

export class AppModule { }
```

That's it! Once imported, you can use the components:

## Progress Bar Button:

```html
<progress-bar-button [options]="options" (onClick)="someFunc()"></progress-bar-button>

```
### API:

You can use `(click)` but a custom `onClick` handler is provided as well. Which is useful if using the buttons for forms and you need the buttton to be entirely disabled.

```json
@Output() onClick
```

Button options (see below)

```json
@Input() options
```


Options:

```json
active: boolean, // is loading
text: string, // button text
buttonColor?: string, // primary/accent/warn
barColor?: string, // primary/accent/warn
raised?: boolean, // raised button
mode?: string, // determinate/intederminate
value?: number // used if mode is determinate
disabled?: boolean // button disabled
```

## Progress Spinner Button:

```html 
<spinner-button [options]="options" (onClick)="someFunc()"></spinner-button>
```

### API:

You can use `(click)` but a custom `onClick` handler is provided as well. Which is useful if using the buttons for forms and you need the buttton to be entirely disabled.

```json
@Output() onClick
```

Button options (see below)

```json
@Input() options
```

Options:

```json
active: boolean, // is loading
text: string, // button text
buttonColor?: string, // primary/accent/warn
spinnerColor?: string, // primary/accent/warn
raised?: boolean, // raised button
mode?: string, // determinate/intederminate
value?: number // used if mode is determinate
fullWidth?: boolean // button will be full width if true
disabled?: boolean // button disabled
```

## Development

Download or clone this repo

run `npm install`

When you are ready to build, run `npm run bundle`


## License

MIT © [Michael Doye](mailto:michaeldoye[@]gmail.com)
>>>>>>> e85096014005bb17ae713b348d68a3b672d7fb85
