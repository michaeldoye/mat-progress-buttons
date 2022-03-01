import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header.component';
import { RouterLinkStubDirective, RouterLinkActiveStubDirective } from './../../../testing/router-stubs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let linkDes: DebugElement[];
  let links: RouterLinkStubDirective[];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbCollapseModule
      ],
      declarations: [
        HeaderComponent,
        RouterLinkStubDirective,
        RouterLinkActiveStubDirective
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
      });
  }));

  beforeEach(() => {
    // trigger initial data binding
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
    links = linkDes.map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can get RouterLinks from template', () => {
    expect(links.length).toBe(1, "should have 1 link");
    expect(links[0].linkParams).toBe('/home', "1st link should go to Home");
  });

  it('can click Home link in template', () => {
    const homeLinkDe = linkDes[0];
    const homeLink = links[0];

    expect(homeLink.navigatedTo).toBeNull("link should not have navigated yet");

    homeLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(homeLink.navigatedTo).toBe('/home');
  });

});
