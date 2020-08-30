import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {RATINGS} from './rating.container';
import {FormGroup} from '@angular/forms';
import {CV} from '../../../model/data';
import {Subscription} from 'rxjs';
import {MatFormFieldControl} from '@angular/material';

@Component({
  selector: 'app-rating-ui',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent implements OnInit, OnDestroy {
  @Input() formGroup: FormGroup;
  @Input() cv: CV;
  @Output() update: EventEmitter<CV> = new EventEmitter<CV>();

  readonly RATINGS = RATINGS;

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
    updatedCv.id = this.cv.id;
    updatedCv.personalDetails = this.cv.personalDetails;
    updatedCv.experiences = this.cv.experiences;
    updatedCv.skillToRating = form.value.ratings.reduce((map, obj) => {
      map.set(obj.description, obj.property);
      return map;
    }, new Map());

    this.update.emit(updatedCv);
  }

  get dynamicObject() {
    return {
      description: '',
      property: '',
    };
  }

}
