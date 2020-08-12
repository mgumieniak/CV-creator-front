import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CreatorRoutingModule } from "./creator-routing.module";
import { CreatorComponent } from "./creator.component";
import { FormComponent } from "./form/form.component";
import { PreviewComponent } from "./preview/preview.component";
import { MaterialModule } from "../MaterialModule";
import { ReactiveFormsModule } from '@angular/forms';
import { FormContainer } from './form/form.container';
import { PreviewContainer } from './preview/preview.container';

@NgModule({
  declarations: [CreatorComponent, FormComponent, PreviewComponent, FormContainer, PreviewContainer],
  imports: [CommonModule, CreatorRoutingModule, MaterialModule,ReactiveFormsModule],
})
export class CreatorModule {}
