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
    text: 'Download a long name',
    spinnerSize: 19,
    raised: false,
    stroked: true,
    buttonColor: 'accent',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
  };


  spinnerButtonOptions1 = {
    active: false,
    text: 'Download a long name',
    spinnerSize: 19,
    raised: true,
    stroked: false,
    buttonColor: 'primary',
    spinnerColor: 'accent',
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
}
