import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormFieldComponent {
  @Input() formGroup: FormGroup;
  @Input() formArrayName: string;
  @Input() key: string;
  @Input() value: string;

  constructor(private formBuilder: FormBuilder) {
  }

  get additionDetails(): FormArray {
    return this.formGroup.get(this.formArrayName) as FormArray;
  }

  buildPosition(): FormGroup {
    return this.formBuilder.group({
      description: '',
      property: '',
    });
  }

  addAdditionDetails(): void {
    this.additionDetails.push(this.buildPosition());
  }

  removeAdditionDetails(i): void {
    this.additionDetails.removeAt(i);
  }
}
