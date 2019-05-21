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

StackBlitz demo https://stackblitz.com/edit/mat-progress-buttons-demo

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

#### Global options
You can optionally provide global options via `forRoot()`.

```js
const defaultOptions: MatProgressButtonOptions = {
  active: false,
  spinnerSize: 19,
  raised: false,
  stroked: true,
  buttonColor: 'accent',
  spinnerColor: 'accent',
  fullWidth: false,
  disabled: false,
  mode: 'indeterminate',
  disableRipple: false
};

@NgModule({
  imports: [
    MatProgressButtonsModule.forRoot(defaultOptions),
  ],
  ...
})
```

Default options will be applied to **_each_** button in that module (ideal if you are using just one button per module). Default options can be overwritten by providing options via the `[options]` input on the button.

## Usage

### Spinner Button

```js
import { Component } from '@angular/core';
import { MatProgressButtonOptions } from 'mat-progress-buttons';

@Component({
  selector: 'app-home',
  template: '<mat-spinner-button (btnClick)="btnClick()" [options]="btnOpts"></mat-spinner-button>'
})
export class SomeComponent {

  // Button Options
  btnOpts: MatProgressButtonOptions = {
    active: false,
    text: 'Stroked Button',
    spinnerSize: 19,
    raised: false,
    stroked: true,
    flat: false,
    fab: false,
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
  template: '<mat-bar-button (btnClick)="btnClick()" [options]="btnOpts"></mat-bar-button>'
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
    flat: false,
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

**Note**: Bar Button does not suppor the `fab` style, currently.

### Button Options

```js
  /** Whether the button is currently active (progress should show). */
  active: boolean;
  /** The button anchor text */
  text?: string;
  /** Theme color of the button (primary, warn, accent). */
  buttonColor?: ThemePalette;
  /** Theme color of the spinner (primary, warn, accent). */
  spinnerColor?: ThemePalette;
  /** Theme color of the progress bar (primary, warn, accent). */
  barColor?: ThemePalette;
  /** mat-raised-button */
  raised?: boolean;
  /** mat-stroked-button */
  stroked?: boolean;
  /** mat-flat-button */
  flat?: boolean;
  /** mat-fab-button */
  fab?: boolean;
  /** The size of the spinner for the spinner button */
  spinnerSize?: number;
  /** Progress Mode (determinate, indeterminate)*/
  mode?: ProgressSpinnerMode;
  /** Value for determinate progress */
  value?: number;
  /** Whether the button should be full width */
  fullWidth?: boolean;
  /** Whether the button is disabled*/
  disabled?: boolean;
  /** For fab: true only - the icon to be used for fab button */
  icon?: string;
  /** The button type, eg: 'submit' */
  type?: string;
  /** Whether the MatRipple should be disabled */
  disableRipple?: boolean
```

<a name="run-demo-app-locally"/>

## Run Demo App Locally

- [clone this repo](https://github.com/michaeldoye/mat-progress-buttons.git) by running
```bash
$ git clone https://github.com/michaeldoye/mat-progress-buttons.git
```

- link the **mat-progress-buttons** package

```bash
$ gulp link
```

- navigate to the demo app directory
```bash
$ cd demo
```

- install the dependencies
```bash
$ npm i
```

- run/start/serve the app
```bash
$ npm run start
```
or
```bash
$ ng serve --open
```
- the app is now hosted by `http://localhost:4200/`


<a name="development"/>

## Development

1. clone this [repo](https://github.com/michaeldoye/mat-progress-buttons.git)
2. Install the dependencies by running `npm i`
3. build the library `npm run build` or `gulp build`
4. Link the library `gulp link`
 5. Navigate to the demo app's directory
  - `cd demo`
  _ `npm i`
  _ `npm start`

## License

Copyright (c) 2018 Michael Doye. Licensed under the MIT License (MIT)
