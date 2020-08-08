import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatorComponent } from './creator.container';

const routes: Routes = [{ path: '', component: CreatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorRoutingModule { }
