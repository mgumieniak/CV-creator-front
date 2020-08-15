import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {CV} from 'src/app/model/data';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.container.html',
  styleUrls: ['./preview.container.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewContainer {
  @Input() cv: CV;

  constructor(
    private cvService: CvService
  ) {
  }

}
