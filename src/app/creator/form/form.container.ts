import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CV} from 'src/app/model/data';

@Component({
  selector: 'app-form',
  templateUrl: './form.container.html',
  styleUrls: ['./form.container.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormContainer {
  @Input() cv: CV;
}
