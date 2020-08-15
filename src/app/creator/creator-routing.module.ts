import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatorComponent } from './creator.component';
import {CreatorContainer} from './creator.container';

const routes: Routes = [{ path: '', component: CreatorContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorRoutingModule { }
