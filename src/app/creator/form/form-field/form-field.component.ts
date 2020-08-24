import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent {
  @Input() formGroup: FormGroup;
  @Input() title: string;
  @Input() isValid: boolean;
  @Input() formName: string;
  @Input() errorMsg: string;

  constructor() {
  }
}
