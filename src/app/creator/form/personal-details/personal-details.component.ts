import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CV} from '../../../model/data';
import {Subscription} from 'rxjs';
import {ADDITION_DETAILS, EMAIL, FIRSTNAME, LASTNAME, PHONE} from './personal-details.container';


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

  readonly EMAIL = EMAIL;
  readonly FIRSTNAME = FIRSTNAME;
  readonly LASTNAME = LASTNAME;
  readonly PHONE = PHONE;
  readonly ADDITION_DETAILS = ADDITION_DETAILS;

  constructor() {
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

  getEmailErrorMessage() {
    if (this.formGroup.get(EMAIL).hasError('required')) {
      return 'You must enter a value';
    }

    return this.formGroup.get(EMAIL).hasError(EMAIL) ? 'Not a valid email' : '';
  }

  get dynamicObject() {
    return {
      description: '',
      property: '',
    };
  }

  isEmailValid() {
    return this.formGroup.get(EMAIL).invalid;
  }

  updateGivenCV(form): void {
    const updatedCv = new CV();
    const personalDetails = new Map<string, string>();

    for (const value in form.value) {
      if (value === ADDITION_DETAILS) {
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
    updatedCv.experiences = this.cv.experiences;
    updatedCv.personalDetails = personalDetails;

    this.update.emit(updatedCv);
  }


}
