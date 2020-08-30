import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {CreatorRoutingModule} from './creator-routing.module';
import {CreatorComponent} from './creator.component';
import {FormComponent} from './form/form.component';
import {PreviewComponent} from './preview/preview.component';
import {MaterialModule} from '../MaterialModule';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormContainer} from './form/form.container';
import {PreviewContainer} from './preview/preview.container';
import {FormFieldComponent} from './form/form-field/form-field.component';
import {PersonalDetailsComponent} from './form/personal-details/personal-details.component';
import {PersonalDetailsContainer} from './form/personal-details/personal-details.container';
import {CreatorContainer} from './creator.container';
import {DynamicFormFieldComponent} from './form/dynamic-form-field/dynamic-form-field.component';
import {ExperienceComponent} from './form/experience/experience.component';
import {ExperienceContainer} from './form/experience/experience.container';
import {DateAdapter, MAT_DATE_FORMATS, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {CustomDateAdapter} from '../dateAdapter/custom-date-adapter';
import {DateRangePickerComponent} from './form/date-range-picker/date-range-picker.component';
import { RatingComponent } from './form/rating/rating.component';
import { StarRatingComponent } from './form/star-rating/star-rating.component';
import { RatingContainer } from './form/rating/rating.container';
import { DynamicStarRatingComponent } from './form/dynamic-star-rating/dynamic-star-rating.component';
import { StarRatingContainer } from './form/star-rating/star-rating.container';

const APP_DATE_FORMATS = {
  parse: {
    dateInput: {month: 'short', year: 'numeric', day: 'numeric'},
  },
  display: {
    dateInput: 'input',
    monthYearLabel: {year: 'numeric', month: 'numeric'},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'},
  }
};

@NgModule({
  declarations: [CreatorComponent, FormComponent, PreviewComponent, FormContainer, PreviewContainer, FormFieldComponent,
    PersonalDetailsComponent, PersonalDetailsContainer, CreatorContainer, DynamicFormFieldComponent, ExperienceComponent,
    ExperienceContainer,
    DateRangePickerComponent,
    RatingComponent,
    StarRatingComponent,
    RatingContainer,
    DynamicStarRatingComponent,
    StarRatingContainer],
  imports: [CommonModule, CreatorRoutingModule, MaterialModule, ReactiveFormsModule, FormsModule, MatDatepickerModule,
    MatNativeDateModule],
  providers: [
    DatePipe,
    MatDatepickerModule,
    {provide: DateAdapter, useClass: CustomDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS},
  ]
})


export class CreatorModule {
}
