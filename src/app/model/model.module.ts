import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RestClientService } from './rest-client.service';



@NgModule({
  providers: [RestClientService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ModelModule { }
