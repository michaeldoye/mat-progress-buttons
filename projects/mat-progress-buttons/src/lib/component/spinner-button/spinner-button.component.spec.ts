import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatSpinnerButtonComponent } from './spinner-button.component';
import { MatProgressButtonsModule } from '../../mat-progress-buttons.module';

describe('MatBarButtonComponent', () => {
  let component: MatSpinnerButtonComponent;
  let fixture: ComponentFixture<MatSpinnerButtonComponent>;

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
    fixture = TestBed.createComponent(MatSpinnerButtonComponent);
    component = fixture.componentInstance;
    component.options = {
      spinnerColor: 'primary',
      active: false,
      buttonColor: 'primary',
      text: 'test button',
      disabled: false,
    };
    fixture.detectChanges();
  });

  it('should create MatSpinnerButtonComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click if not active or disabled', () => {
    const spy = jasmine.createSpy('MatSpinnerButtonComponentBtnClick');
    component.btnClick.subscribe(spy);

    const event = new MouseEvent('click', { bubbles: true });
    component.handleClick(event);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(event);
  });

  it('should NOT emit on click if active', () => {
    const spy = jasmine.createSpy('MatSpinnerButtonComponentBtnClick');
    component.btnClick.subscribe(spy);

    component.options = { active: true, text: 'test button' };
    const event = new MouseEvent('click', { bubbles: true });
    component.handleClick(event);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should NOT emit on click if disabled', () => {
    const spy = jasmine.createSpy('MatSpinnerButtonComponentBtnClick');
    component.btnClick.subscribe(spy);

    component.options = { active: false, disabled: true, text: 'test button' };
    const event = new MouseEvent('click', { bubbles: true });
    component.handleClick(event);

    expect(spy).not.toHaveBeenCalled();
  });
});
