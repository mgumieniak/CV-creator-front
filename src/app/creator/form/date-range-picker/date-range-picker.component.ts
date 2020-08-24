import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateRangePickerComponent {
  @Input() dateRangePicker: FormGroup;
  @Input() dateIndex: number;
  @Input() formName: string;
  @Input() formNameStartDate: string;
  @Input() formNameEndDate: string;
  isVisible = true;

  constructor() {
  }

  setAll(checked: boolean) {
    console.log('Value: ' + checked);
    this.isVisible = checked;
  }
}
