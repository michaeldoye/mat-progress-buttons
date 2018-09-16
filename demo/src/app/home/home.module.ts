import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressButtonsModule } from 'mat-progress-buttons';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatProgressButtonsModule.forRoot(),
        HomeRoutingModule,
        MatButtonModule
    ],
    declarations: [HomeComponent],
})
export class HomeModule { }
