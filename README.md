# Angular Material Design Progress Buttons 
Very simple Angular4+ Material Design progress buttons

## Demo

[**StackBlitz Demo**](https://stackblitz.com/edit/custom-progress-butons)


## Usage

Import in any Angular application by running:

```bash
$ npm install --save mat-progress-buttons
```

Install Material Design: ([Getting Started](https://material.angular.io/guide/getting-started))

```bash
$ npm install --save @angular/material @angular/cdk
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

Bar Button:

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
spinnerColor?: string, // primary/accent/warn
mode?: string, // determinate/intederminate
value?: number // used if mode is determinate
```

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
mode?: string, // determinate/intederminate
value?: number // used if mode is determinate
```



## License

MIT © [Michael Doye](mailto:michaeldoye[@]gmail.com)
