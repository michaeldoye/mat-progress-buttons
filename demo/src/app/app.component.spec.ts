/* tslint:disable:no-unused-variable */
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';

import { RouterOutletStubComponent, RouterLinkStubDirective } from '../testing/router-stubs';
import { Observable, of } from 'rxjs';

@Component({ selector: 'app-header', template: '' })
class HeaderStubComponent { }

class RouterStub {
  events: Observable<Event> = of<Event>();
}

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderStubComponent,
        FooterComponent,
        RouterOutletStubComponent
      ],
      providers: [
        { provide: Router, useClass: RouterStub }
      ]
    });
  }));

  it('should create', waitForAsync(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
