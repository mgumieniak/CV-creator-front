import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {RestClientService} from '../../../model/rest-client.service';
import {CvService} from '../../cv.service';
import {noop} from 'rxjs';
import {CV} from '../../../model/data';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.container.html',
  styleUrls: ['./personal-details.container.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsContainer {
  @Input() cv: CV;
  @Input() formGroup: FormGroup;

  constructor(private restClient: RestClientService,
              private cvService: CvService) {
  }

  update(cv: CV): void {
    this.restClient.update(cv).subscribe({
      next: (cv) => this.cvService.updateGivenCv(cv),
      error: noop,
    });
  }
}
