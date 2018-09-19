import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { HighlightModule } from 'ngx-highlightjs';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatButtonModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatProgressButtonsModule.forRoot(),
        HighlightModule.forRoot({theme: 'atelier-cave-light'}),
        HomeRoutingModule,
        MatButtonModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule
    ],
    declarations: [HomeComponent],
})
export class HomeModule { }
