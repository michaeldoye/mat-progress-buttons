import {
  Component,
  Input,
  Output,
  HostListener,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  Inject,
} from '@angular/core';
import { MatProgressButtonOptions } from '../../mat-progress-buttons.interface';
import {
  GLOBAL_CONFIG,
  GlobalConfig,
} from '../../mat-progress-buttons.injection-token';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mat-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss'],
})
export class MatSpinnerButtonComponent implements OnChanges {
  @Input() options: MatProgressButtonOptions;
  @Input() buttonId: string;
  @Input() active: boolean;
  @Input() disabled: boolean;

  @Output() btnClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  @HostListener('click', ['$event'])
  public handleClick(event: MouseEvent): void {
    if (!this.options.disabled && !this.options.active) {
      this.btnClick.emit(event);
    }
  }

  constructor(@Inject(GLOBAL_CONFIG) private config: GlobalConfig) {}

  get configExists(): boolean {
    return !!this.buttonId && !!this.config;
  }

  get globalConfig(): MatProgressButtonOptions {
    return this.configExists
      ? this.config.find((item) => item.id === this.buttonId)
      : this.options;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.active) {
      this.options.active = changes.active.currentValue;
    }
    if (changes.disabled) {
      this.options.disabled = changes.disabled.currentValue;
    }
    this.options = { ...this.globalConfig, ...this.options };
  }
}
