import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-star-rating',
  templateUrl: './dynamic-star-rating.component.html',
  styleUrls: ['./dynamic-star-rating.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    return this.formBuilder.group(this.controlsConfig);
  }

  controlsName(): string[] {
    return Object.keys(this.controlsConfig);
  }

  removeAdditionDetails(i): void {
    this.arrays.removeAt(i);
  }

}
