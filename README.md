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
    customClass: 'some-class',
    // add an icon to the button
    buttonIcon: {
      fontSet: 'fa',
      fontIcon: 'fa-heart',
      inline: true
    }
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

### Spinner button FAB

You can use the spinner button with a `mat-fab` with an icon. Both `mat-icon` and `font awesome` are supported.

To set up fontawesome to work with `mat-icon` you can see instructions [here](https://stackoverflow.com/a/46208824/3055401)

Use the `icon` property on the `options` object

**Note**: Bar Button does not support the `fab` style, currently.


```
  btnOpts: MatProgressButtonOptions = {
    active: false,
    text: 'Stroked Button',
    spinnerSize: 19,
    raised: false,
    stroked: true,
    flat: false,
    fab: true, // set fab to true
    buttonColor: 'accent',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
    icon: {
      color: primary,
      fontSet: 'fa',
      fontIcon: 'fa-save',
      inline: true
    },
  };
```

#### Icon API

```
interface MatProgressButtonIcon {
  color?: ThemePalette; // icon color (primary or accent)
  fontIcon?: string;    // name of the icon (for fontawsome, use 'fa-[icon_name])'
  fontSet?: string;     // if using fontawesome, use 'fa' (omit for material icons)
  inline?: boolean;     // automatically size the icon
  svgIcon?: string;     // name of the icon in the SVG icon set.
}
```

More info in Angular Material [Docs](https://material.angular.io/components/icon/api#MatIcon)

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
    disabled: false,
    customClass: 'some-class',
    // add an icon to the button
    buttonIcon: {
      fontSet: 'fa',
      fontIcon: 'fa-heart',
      inline: true
    }
  };

  // Click handler
  btnClick(): void {
    this.btnOpts = { ...this.btnOpts, active: true };
    setTimeout(() => {
      this.btnOpts = { ...this.btnOpts, active: false };
    }, 3350);
  }
};
```

### Global Options

Optionally pass default `MatProgressButtonOptions` in `forRoot` in side your app.modlue.ts for each button as an array. 

```typescript
const button1: MatProgressButtonOptions = {
  id: 'button1', // Id should match the [buttonId] input
  ...
};

const button2: MatProgressButtonOptions = {
  id: 'button2', // Id should match the [buttonId] input
  ...
};

@NgModule({
  imports: [
    MatProgressButtonsModule.forRoot([button1, button2]),
  ],
  declarations: [HomeComponent],
})
```

#### NB: add the id above should match the id provided in the `[buttonId]` input.

```html
<mat-bar-button
  (btnClick)="someFunc3()"
  [buttonId]="'button1'"
  [options]="barButtonOptions"
></mat-bar-button>
```
`[options]` on the component will override Global Options provided in `forRoot`

### Overriding default CSS

To override CSS (color and background color of spinner buttons), you can write CSS for particular component and use `ViewEncapsulation.None`

Example:

CSS:

```css
.class-name {
    background-color: red;
}
```

TS:

```typescript
@Component({
  ...,
  encapsulation: ViewEncapsulation.None
})
class MyComponent {}
```

<a name="run-demo-app-locally"/>

## Run Demo App Locally

- [clone this repo](https://github.com/michaeldoye/mat-progress-buttons.git) by running
```bash
$ git clone https://github.com/michaeldoye/mat-progress-buttons.git
```

- link the **mat-progress-buttons** package

```bash
$ ng build
$ npm link ./dist/mat-progress-buttons
```
or
```bash
$ ng build
$ npm link ./dist/mat-progress-buttons
$ ng build --watch
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
3. build the library `ng buld`
4. test the library `ng test`
5. Link the library `npm link ./dist/mat-progress-buttons`
6. Navigate to the demo app's directory:
  - `cd demo`
  - `npm i`
  - `npm start`

## License

Copyright (c) 2018 Michael Doye. Licensed under the MIT License (MIT)
