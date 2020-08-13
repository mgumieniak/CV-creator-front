import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs';
import {CV} from 'src/app/model/data';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.container.html',
  styleUrls: ['./preview.container.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// tslint:disable-next-line:component-class-suffix
export class PreviewContainer {
  cv$: Observable<CV> = this.cvService.getCV();

  constructor(
    private cvService: CvService
  ) {
  }

}
