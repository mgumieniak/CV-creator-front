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
import { PersonalDetailsComponent } from './form/personal-details/personal-details.component';
import { PersonalDetailsContainer } from './form/personal-details/personal-details.container';

@NgModule({
  declarations: [CreatorComponent, FormComponent, PreviewComponent, FormContainer, PreviewContainer, FormFieldComponent, PersonalDetailsComponent, PersonalDetailsContainer],
    imports: [CommonModule, CreatorRoutingModule, MaterialModule, ReactiveFormsModule, FormsModule],
})
export class CreatorModule {
}
