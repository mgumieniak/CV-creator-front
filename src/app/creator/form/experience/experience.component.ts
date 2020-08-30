import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {CV} from '../../../model/data';
import {COMPANY, DESCRIPTION, END_DATE, EXPERIENCE, POSITION, START_DATE} from './experience.container';


@Component({
  selector: 'app-experience-ui',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy, OnChanges {
  @Input() formGroup: FormGroup;
  @Input() cv: CV;
  @Output() update: EventEmitter<CV> = new EventEmitter<CV>();

  constructor(private formBuilder: FormBuilder) {
  }

  readonly COMPANY = COMPANY;
  readonly POSITION = POSITION;
  readonly START_DATE = START_DATE;
  readonly END_DATE = END_DATE;
  readonly DESCRIPTION = DESCRIPTION;
  readonly EXPERIENCE = EXPERIENCE;

  private valueChangesSub: Subscription;

  ngOnInit(): void {
    this.valueChangesSub = this.formGroup.valueChanges.subscribe(() => {
      this.updateGivenCV(this.formGroup);
    });
  }

  get arrays(): FormArray {
    return this.formGroup.get(EXPERIENCE) as FormArray;
  }

  addAdditionDetails(): void {
    this.arrays.push(this.buildPosition());
  }

  buildPosition(): FormGroup {
    return this.formBuilder.group({
      company: COMPANY,
      position: POSITION,
      startDate: START_DATE,
      endDate: END_DATE,
      description: DESCRIPTION,
    });
  }


  removeAdditionDetails(i): void {
    this.arrays.removeAt(i);
  }


  ngOnDestroy(): void {
    this.valueChangesSub.unsubscribe();
  }

  updateGivenCV(form: FormGroup): void {
    const updatedCv = new CV();

    updatedCv.id = this.cv.id;
    updatedCv.personalDetails = this.cv.personalDetails;
    updatedCv.experiences = form.value.experience;
    updatedCv.skillToRating = this.cv.skillToRating;
    this.update.emit(updatedCv);
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHANGE !!!');
  }
}
