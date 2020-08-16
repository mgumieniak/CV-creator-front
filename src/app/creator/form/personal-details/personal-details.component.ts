import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {CV} from '../../../model/data';
import {classToPlain, plainToClass} from 'class-transformer';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-personal-details-ui',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsComponent implements OnInit, OnDestroy {
  @Input() formGroup: FormGroup;
  @Input() cv: CV;
  @Output() update: EventEmitter<CV> = new EventEmitter<CV>();

  constructor(private formBuilder: FormBuilder) {
  }

  private valueChangesSub: Subscription;

  ngOnInit(): void {
    this.valueChangesSub = this.formGroup.valueChanges.subscribe(() => {
      this.updateGivenCV(this.formGroup);
    });
  }

  ngOnDestroy(): void {
    this.valueChangesSub.unsubscribe();
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

  get additionDetails(): FormArray {
    return this.formGroup.get('additionDetails') as FormArray;
  }

  getEmailErrorMessage() {
    if (this.formGroup.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.formGroup.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  isEmailValid() {
    return this.formGroup.get('email').invalid;
  }

  updateGivenCV(form): void {
    const updatedCv = new CV();
    const personalDetails = new Map<string, string>();


    for (const value in form.value) {
      if (value === 'additionDetails') {
        const nestedMap = form.value.additionDetails.reduce((map, obj) => {
          map.set(obj.description, obj.property);
          return map;
        }, new Map());
        personalDetails.set(value, nestedMap);
      } else {
        personalDetails.set(value, form.value[value]);
      }
    }
    updatedCv.id = this.cv.id;
    updatedCv.experience = this.cv.experience;
    updatedCv.personalDetails = personalDetails;

    this.update.emit(updatedCv);
  }

}
