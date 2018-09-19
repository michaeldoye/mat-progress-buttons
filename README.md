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