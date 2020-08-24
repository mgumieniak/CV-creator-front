import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

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
import {DateAdapter, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {CustomDateAdapter} from '../dateAdapter/custom-date-adapter';
import { DateRangePickerComponent } from './form/date-range-picker/date-range-picker.component';

@NgModule({
  declarations: [CreatorComponent, FormComponent, PreviewComponent, FormContainer, PreviewContainer, FormFieldComponent,
    PersonalDetailsComponent, PersonalDetailsContainer, CreatorContainer, DynamicFormFieldComponent, ExperienceComponent,
    ExperienceContainer,
    DateRangePickerComponent],
  imports: [CommonModule, CreatorRoutingModule, MaterialModule, ReactiveFormsModule, FormsModule, MatDatepickerModule,
    MatNativeDateModule],
  providers: [
    MatDatepickerModule,
    {provide: DateAdapter, useClass: CustomDateAdapter},
  ]
})
export class CreatorModule {
}
