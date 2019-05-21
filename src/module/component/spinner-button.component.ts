import {
  Component,
  Input,
  Output,
  HostListener,
  EventEmitter,
  OnInit,
  Inject
} from '@angular/core';
import { MatProgressButtonOptions } from '../mat-progress-buttons.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mat-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss']
})
export class MatSpinnerButtonComponent implements OnInit {
  public buttonOptions: Partial<MatProgressButtonOptions>;
  private _options: Partial<MatProgressButtonOptions>;

  @Output() btnClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Input() set options(value: Partial<MatProgressButtonOptions>) {
    this._options = value;
  }

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent) {
    if (!this.buttonOptions.disabled && !this.buttonOptions.active) {
      this.buttonOptions = Object.assign(this._options, { ...this._defaultOptions });
      this.btnClick.emit(event);
    }
  }

  constructor(
    // TODO: change to inject token
    @Inject('defaultButtonOptions') private _defaultOptions: MatProgressButtonOptions
  ) {}

  public ngOnInit(): void {
    this.buttonOptions = this._defaultOptions
      ? Object.assign(this._defaultOptions, { ...this._options })
      : this._options;
  }
}
