import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CreatorRoutingModule } from "./creator-routing.module";
import { CreatorComponent } from "./creator.component";
import { FormComponent } from "./form/form.component";
import { PreviewComponent } from "./preview/preview.component";
import { MaterialModule } from "../MaterialModule";

@NgModule({
  declarations: [CreatorComponent, FormComponent, PreviewComponent],
  imports: [CommonModule, CreatorRoutingModule, MaterialModule],
})
export class CreatorModule {}
