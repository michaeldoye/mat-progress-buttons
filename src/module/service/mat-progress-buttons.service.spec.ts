import { TestBed, inject } from '@angular/core/testing';

import { MatProgressButtonsService } from './mat-progress-buttons.service';

describe('LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatProgressButtonsService]
    });
  });

  it('should create service', inject([MatProgressButtonsService], (service: MatProgressButtonsService) => {
    expect(service).toBeTruthy();
  }));

  it('should say hello to stranger', inject([MatProgressButtonsService], (service: MatProgressButtonsService) => {
    expect(service.sayHello()).toBe('Hello Stanger!');
  }));

 it('should say hello to provided user', inject([MatProgressButtonsService], (service: MatProgressButtonsService) => {
    expect(service.sayHello('ng-hacker')).toBe('Hello ng-hacker!');
  }));
});
