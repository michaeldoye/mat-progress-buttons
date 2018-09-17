import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { HighlightModule } from 'ngx-highlightjs';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatButtonModule, MatTabsModule, MatToolbarModule } from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatProgressButtonsModule.forRoot(),
        HighlightModule.forRoot({theme: 'github-gist'}),
        HomeRoutingModule,
        MatButtonModule,
        MatTabsModule,
        MatToolbarModule
    ],
    declarations: [HomeComponent],
})
export class HomeModule { }
