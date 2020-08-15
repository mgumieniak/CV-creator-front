import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {CV} from '../model/data';

@Component({
  selector: 'app-creator-ui',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorComponent {
  @Input() cv: CV;
}
