import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {CV} from '../../../model/data';

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
