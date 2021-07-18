import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import sdk from '@stackblitz/sdk';

import { MatProgressButtonOptions } from 'mat-progress-buttons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  strokedCode = `  import { Component } from '@angular/core';
  import { MatProgressButtonOptions } from 'mat-progress-buttons';

  @Component({
    selector: 'app-home',
    template: '<mat-spinner-button (btnClick)="btnClick()" [options]="btnOpts" [active]="btnState"></mat-spinner-button>'
  })
  export class SomeComponent {

    // Button Options
    btnOpts: MatProgressButtonOptions = {
      text: 'Stroked Button',
      spinnerSize: 19,
      raised: false,
      stroked: true,
      buttonColor: 'accent',
      spinnerColor: 'accent',
      fullWidth: false,
      disabled: false,
      customClass: 'some-class',
      mode: 'indeterminate',
      // use font-awesome icon for fab
      icon: {
        fontSet: 'fa',
        fontIcon: 'fa-heart',
        inline: true
      },
      // Icon for normal buttons
      buttonIcon: {
        fontSet: 'fa',
        fontIcon: 'fa-heart',
        inline: true
      }
    };

    btnState: boolean = false;

    // Click handler
    btnClick(): void {
      this.btnState = true;
      setTimeout(() => {
        this.btnState = false;
      }, 3350);
    }
  }`;

  strokedOpts = `    active: boolean,
    text: string,
    spinnerSize: number,
    raised: boolean,
    stroked: boolean,
    buttonColor: string,
    spinnerColor: string,
    fullWidth: boolean,
    disabled: boolean,
    customClass: 'some-class',
    mode: string`;
  activeCode = `[active]="active$ | async"`;
  disabledCode = `[disabled]="disabled$ | async"`;
  globalOpts = `
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
  })`;
  globalOptsHtml = `<mat-bar-button
    (btnClick)="someFunc3()"
    [buttonId]="'button1'"
    [active]="buttonState">
  </mat-bar-button>`;
  raisedCode = `  import { Component } from '@angular/core';
  import { MatProgressButtonOptions } from 'mat-progress-buttons';

  @Component({
    selector: 'app-home',
    template: '<mat-bar-button (btnClick)="btnClick()" [options]="btnOpts"></mat-bar-button>'
  })
  export class SomeComponent {

    // Button Options
    btnOpts: MatProgressButtonOptions = {
      text: 'Stroked Button',
      buttonColor: 'accent',
      barColor: 'accent',
      raised: false,
      stroked: true,
      mode: 'indeterminate',
      value: 0,
      customClass: 'some-class',
      disabled: false,
      // Icon for normal buttons
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
  }`;

  raisedOpts = `    active: boolean,
    text: string,
    raised: boolean,
    stroked: boolean,
    buttonColor: string,
    barColor: string,
    fullWidth: boolean,
    disabled: boolean,
    customClass: 'some-class',
    mode: string`;

  spinnerButtonOptions: MatProgressButtonOptions = {
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
    customClass: 'some-class',
    buttonIcon: {
      fontIcon: 'favorite',
    },
  };

  spinnerButtonOptions1: MatProgressButtonOptions = {
    active: false,
    text: 'Raised Button',
    spinnerSize: 19,
    raised: true,
    stroked: false,
    buttonColor: 'primary',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
  };

  spinnerButtonOptions2: MatProgressButtonOptions = {
    active: false,
    text: 'Default Button',
    spinnerSize: 19,
    raised: false,
    stroked: false,
    buttonColor: 'primary',
    spinnerColor: 'primary',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
  };

  spinnerButtonOptions3: MatProgressButtonOptions = {
    active: false,
    text: 'Flat Button',
    spinnerSize: 19,
    raised: false,
    stroked: false,
    flat: true,
    buttonColor: 'primary',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
  };

  spinnerButtonOptions4: MatProgressButtonOptions = {
    active: false,
    text: 'Fab',
    spinnerSize: 19,
    raised: false,
    stroked: false,
    flat: false,
    fab: true,
    buttonColor: 'primary',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
    icon: {
      fontSet: 'fa',
      fontIcon: 'fa-heart',
      inline: true,
    },
  };

  barButtonOptions: MatProgressButtonOptions = {
    text: 'Stroked Button',
  };

  barButtonOptionsActiveState = false;

  barButtonOptions1: MatProgressButtonOptions = {
    text: 'Raised Button',
  };

  barButtonOptions2: MatProgressButtonOptions = {
    active: false,
    text: 'Default Button',
    buttonColor: 'primary',
    barColor: 'primary',
    raised: false,
    stroked: false,
    mode: 'indeterminate',
    value: 0,
    disabled: false,
  };

  barButtonOptions3: MatProgressButtonOptions = {
    active: false,
    text: 'Flat Button',
    buttonColor: 'primary',
    barColor: 'primary',
    raised: false,
    stroked: false,
    flat: true,
    mode: 'indeterminate',
    value: 0,
    disabled: false,
  };

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Home | mat-progress-buttons');
  }

  editOnStackBlitz() {
    sdk.openGithubProject('michaeldoye/mat-progress-buttons/tree/master/demo');
  }

  someFunc(): void {
    this.spinnerButtonOptions = { ...this.spinnerButtonOptions, active: true };
    setTimeout(() => {
      this.spinnerButtonOptions = { ...this.spinnerButtonOptions, active: false };
    }, 3350);
  }

  someFunc1(): void {
    this.spinnerButtonOptions1 = { ...this.spinnerButtonOptions1, active: true };
    setTimeout(() => {
      this.spinnerButtonOptions1 = { ...this.spinnerButtonOptions1, active: false };
    }, 3350);
  }

  someFunc2(): void {
    this.spinnerButtonOptions2 = { ...this.spinnerButtonOptions2, active: true };
    setTimeout(() => {
      this.spinnerButtonOptions2 = { ...this.spinnerButtonOptions2, active: false };
    }, 3350);
  }

  someFunc3(): void {
    this.barButtonOptionsActiveState = true;
    setTimeout(() => {
      this.barButtonOptionsActiveState = false;
    }, 3350);
  }

  someFunc4(): void {
    this.barButtonOptions1 = { ...this.barButtonOptions1, active: true };
    setTimeout(() => {
      this.barButtonOptions1 = { ...this.barButtonOptions1, active: false };
    }, 3350);
  }

  someFunc5(): void {
    this.barButtonOptions2 = { ...this.barButtonOptions2, active: true };
    setTimeout(() => {
      this.barButtonOptions2 = { ...this.barButtonOptions2, active: false };
    }, 3350);
  }

  someFunc6(): void {
    this.spinnerButtonOptions3 = { ...this.spinnerButtonOptions3, active: true };
    setTimeout(() => {
      this.spinnerButtonOptions3 = { ...this.spinnerButtonOptions3, active: false };
    }, 3350);
  }

  someFunc7(): void {
    this.barButtonOptions3 = { ...this.barButtonOptions3, active: true };
    setTimeout(() => {
      this.barButtonOptions3 = { ...this.barButtonOptions3, active: false };
    }, 3350);
  }

  someFunc8(): void {
    this.spinnerButtonOptions4 = { ...this.spinnerButtonOptions4, active: true };
    setTimeout(() => {
      this.spinnerButtonOptions4 = { ...this.spinnerButtonOptions4, active: false };
    }, 3350);
  }
}
