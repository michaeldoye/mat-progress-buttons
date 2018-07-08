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
<progress-bar-button [options]="options" (click)="someFunc()"></progress-bar-button>

```
API:

```json
@Input() options; // button options (see below)
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
<spinner-button [options]="options" (click)="someFunc()"></spinner-button>
```

API:

```json
@Input() options; // button options (see below)
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
