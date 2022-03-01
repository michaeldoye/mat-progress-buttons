import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatProgressButtonOptions,
  MatProgressButtonsModule,
} from 'mat-progress-buttons';
import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

export function hljsLanguages() {
  return [{ name: 'typescript', func: typescript }];
}

const button1: MatProgressButtonOptions = {
  id: 'button1',
  text: 'Stroked Button',
  buttonColor: 'accent',
  barColor: 'accent',
  raised: false,
  stroked: true,
  mode: 'indeterminate',
  value: 0,
  disabled: false,
  customClass: 'some-other-class',
  buttonIcon: {
    fontIcon: 'favorite',
  },
};

const button2: MatProgressButtonOptions = {
  id: 'button2',
  text: 'Raised Button',
  buttonColor: 'primary',
  barColor: 'primary',
  raised: true,
  stroked: false,
  mode: 'indeterminate',
  value: 0,
  disabled: false,
};

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatProgressButtonsModule.forRoot([button1, button2]),
    HighlightModule.forRoot({languages: hljsLanguages}),
    HomeRoutingModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
