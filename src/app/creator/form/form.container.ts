import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CV } from 'src/app/model/data';
import { Observable, noop } from 'rxjs';
import { RestClientService } from 'src/app/model/rest-client.service';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.container.html',
  styleUrls: ['./form.container.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormContainer{
  cv$: Observable<CV> = this.cvService.getCV();

  constructor(
    private restClient: RestClientService,
    private cvService: CvService
  ) {}

  update(cv: CV): void {
    this.restClient.update(cv).subscribe({
      next: (cv) => this.cvService.updateGivenCv(cv),
      error: noop,
    });
  }
}
