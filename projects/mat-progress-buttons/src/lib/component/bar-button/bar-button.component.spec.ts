import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatBarButtonComponent } from './bar-button.component';
import { MatProgressButtonsModule } from '../../mat-progress-buttons.module';

describe('MatBarButtonComponent', () => {
  let component: MatBarButtonComponent;
  let fixture: ComponentFixture<MatBarButtonComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MatProgressButtonsModule.forRoot([{ active: true, text: 'test' }]),
        ],
        providers: [
          { provide: 'Global Config', useValue: { active: true, text: 'test' } },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MatBarButtonComponent);
    component = fixture.componentInstance;
    component.options = {
      barColor: 'primary',
      active: false,
      buttonColor: 'primary',
      text: 'test button',
      disabled: false,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click if not active or disabled', () => {
    const spy = jasmine.createSpy('btnClick');
    component.btnClick.subscribe(spy);

    const event = new MouseEvent('click', { bubbles: true });
    component.handleClick(event);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(event);
  });

  it('should NOT emit on click if active', () => {
    const spy = jasmine.createSpy('btnClick');
    component.btnClick.subscribe(spy);

    component.options = { active: true, text: 'test button' };
    const event = new MouseEvent('click', { bubbles: true });
    component.handleClick(event);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should NOT emit on click if disabled', () => {
    const spy = jasmine.createSpy('btnClick');
    component.btnClick.subscribe(spy);

    component.options = { active: false, disabled: true, text: 'test button' };
    const event = new MouseEvent('click', { bubbles: true });
    component.handleClick(event);

    expect(spy).not.toHaveBeenCalled();
  });
});
