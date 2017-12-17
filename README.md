# Angular Material Design Progress Buttons 
Very simple Angular4+ Material Design progress buttons


[![Build Status](https://travis-ci.org/michaeldoye/mat-progress-buttons.svg?branch=master)](https://travis-ci.org/michaeldoye/mat-progress-buttons) [![npm version](https://badge.fury.io/js/mat-progress-buttons.svg)](https://www.npmjs.com/package/mat-progress-buttons)  [![GitHub issues](https://img.shields.io/github/issues/michaeldoye/mat-progress-buttons.svg)](https://github.com/michaeldoye/mat-progress-buttons/issues)

## Demo

[**StackBlitz Demo**](https://stackblitz.com/edit/mat-progress-buttons-demo)


## Usage

Import in any Angular application by running:

```bash
$ npm install --save mat-progress-buttons
```

Install Material Design: ([Getting Started](https://material.angular.io/guide/getting-started))

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


Then from your `AppModule`:

```typescript
...
// Import MatProgressButtons
import { MatProgressButtons } from 'mat-progress-buttons';


@NgModule({
  declarations: [ ... ],
  imports: [
    // Specify as an import
    MatProgressButtons
  ],
  // Add the Api service
  providers: [ ... ]
})
export class AppModule { }
```

Once MatProgressButtons is imported, you can use the components:

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
```

## Development

Power Shell:

```bash
# Clean up previous distributions if folders exist
if (Test-Path dist) {
	Remove-Item dist -Recurse -Force
}

if (Test-Path build) {
	Remove-Item build -Recurse -Force
}

# Variables
$NGC="node_modules/.bin/ngc.cmd"
$ROLLUP="node_modules/.bin/rollup.cmd"

# Run Angular Compiler
& "$NGC" -p src/tsconfig-build.json

# Rollup mat-progress-buttons.js
& "$ROLLUP" build/mat-progress-buttons.js -o dist/mat-progress-buttons.js

# Run Angular Compiler to ES5
& "$NGC" -p src/tsconfig-es5.json

# Rollup mat-progress-buttons.js
& "$ROLLUP" build/mat-progress-buttons.js -o dist/mat-progress-buttons.es5.js

# Copy non-js files from build
Copy-Item -Exclude *.js -Recurse -Path build/* -Destination dist

# Copy library package.json
Copy-Item -Path src/package.json -Destination build/package.json
Copy-Item -Path README.md -Destination build/README.md
```


## License

MIT © [Michael Doye](mailto:michaeldoye[@]gmail.com)
