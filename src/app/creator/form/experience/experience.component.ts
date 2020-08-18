import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {CV} from '../../../model/data';

@Component({
  selector: 'app-experience-ui',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  @Input() formGroup: FormGroup;
  @Input() cv: CV;
  @Output() update: EventEmitter<CV> = new EventEmitter<CV>();

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
