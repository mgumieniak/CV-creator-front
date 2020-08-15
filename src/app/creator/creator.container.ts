import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CV} from '../model/data';
import {CvService} from './cv.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.container.html',
  styleUrls: ['./creator.container.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorContainer {

  cv$: Observable<CV> = this.cvService.getCV();

  constructor(
    private cvService: CvService
  ) {
  }

  log(val) { console.log(val); }
}
