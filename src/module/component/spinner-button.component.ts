import {Component, Input, Output, HostListener, EventEmitter, OnInit, Inject} from '@angular/core';
import { MatProgressButtonOptions } from '../mat-progress-buttons.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mat-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss']
})
export class MatSpinnerButtonComponent implements OnInit {
  public buttonOptions: MatProgressButtonOptions;
  private _options: MatProgressButtonOptions;

  @Input() set options(value: MatProgressButtonOptions) {
    this._options = value;
  };
  @Output() btnClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent) {
    if (!this.buttonOptions.disabled && !this.buttonOptions.active) {
      this.btnClick.emit(event);
    }
  }

  constructor(@Inject('defaultOptions') private opts: MatProgressButtonOptions) {
    this.buttonOptions = this._options ? this._options : this.opts;
  }

  ngOnInit(): void {
    console.log(this.buttonOptions);
  }
}
