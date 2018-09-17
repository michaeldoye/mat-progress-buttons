import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  spinnerButtonOptions = {
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

  strokedCode = `
    <mpb-component (click)="someFunc()" [options]="strokedButtonOpts"></mpb-component>

    strokedButtonOptions = {
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

    someFunc(): void {
      this.strokedButtonOpts.active = true;
      setTimeout(() => {
        this.strokedButtonOpts.active = false;
      }, 3350);
    }
    `;


    raisedCode = `
      <mpb-component (click)="someFunc()" [options]="raisedButtonOpts"></mpb-component>

      raisedButtonOpts = {
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

      someFunc(): void {
        this.raisedButtonOpts.active = true;
        setTimeout(() => {
          this.raisedButtonOpts.active = false;
        }, 3350);
      }
    `;


    defaultCode = `
      <mpb-component (click)="someFunc()" [options]="defaultButtonOpts"></mpb-component>

      defaultButtonOpts = {
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

      someFunc(): void {
        this.defaultButtonOpts.active = true;
        setTimeout(() => {
          this.defaultButtonOpts.active = false;
        }, 3350);
      }
    `;


  spinnerButtonOptions1 = {
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

  spinnerButtonOptions2 = {
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

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Home | mat-progress-buttons');
  }

  editOnStackBlitz() {
    sdk.openGithubProject('michaeldoye/mat-progress-buttons/tree/master/demo');
  }

  someFunc(): void {
    this.spinnerButtonOptions.active = true;
    setTimeout(() => {
      this.spinnerButtonOptions.active = false;
    }, 3350);
  }

  someFunc1(): void {
    this.spinnerButtonOptions1.active = true;
    setTimeout(() => {
      this.spinnerButtonOptions1.active = false;
    }, 3350);
  }

  someFunc2(): void {
    this.spinnerButtonOptions2.active = true;
    setTimeout(() => {
      this.spinnerButtonOptions2.active = false;
    }, 3350);
  }
}
