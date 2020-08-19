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
  @Input() controlsConfig: object;

  constructor(private formBuilder: FormBuilder) {
  }

  get arrays(): FormArray {
    return this.formGroup.get(this.formArrayName) as FormArray;
  }

  addAdditionDetails(): void {
    this.arrays.push(this.buildPosition());
  }

  buildPosition(): FormGroup {
    return this.formBuilder.group(this.controlsConfig);
  }

  controlsName(): string[] {
    return Object.keys(this.controlsConfig);
  }

  removeAdditionDetails(i): void {
    this.arrays.removeAt(i);
  }
}
