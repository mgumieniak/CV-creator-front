import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {CV} from 'src/app/model/data';
import {classToPlain} from 'class-transformer';

@Component({
  selector: 'app-preview-ui',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewComponent {
  @Input() cv: CV;

  constructor() {
  }

  getCV() {
    return classToPlain(this.cv);
  }

}
