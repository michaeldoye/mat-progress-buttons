import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressButtonOptions, MatProgressButtonsModule} from 'mat-progress-buttons';
import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatButtonModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';

export function hljsLanguages() {
    return [
      {name: 'typescript', func: typescript},
    ];
  }

  const defaultOpts: MatProgressButtonOptions = {
    active: false,
    text: 'Stroked Button',
    spinnerSize: 19,
    raised: false,
    stroked: true,
    buttonColor: 'accent',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate'
  };

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatProgressButtonsModule.forRoot(defaultOpts),
        HighlightModule.forRoot({languages: hljsLanguages}),
        HomeRoutingModule,
        MatButtonModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule
    ],
    declarations: [HomeComponent],
})
export class HomeModule { }
