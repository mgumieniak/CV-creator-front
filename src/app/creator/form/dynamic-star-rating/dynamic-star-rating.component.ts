import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-star-rating',
  templateUrl: './dynamic-star-rating.component.html',
  styleUrls: ['./dynamic-star-rating.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicStarRatingComponent {

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
    return this.formBuilder.group({
      value: [{description: '', property: 1}]
    });
  }


  removeAdditionDetails(i): void {
    this.arrays.removeAt(i);
  }

  getFormControl(i: number): FormControl {
    const forms = this.formGroup.get(this.formArrayName) as FormArray;
    return forms.controls[i].get('value') as FormControl;
  }

}
