import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import {CV} from 'src/app/model/data';
import {RestClientService} from 'src/app/model/rest-client.service';
import {plainToClass} from 'class-transformer';

@Component({
  selector: 'app-form-ui',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  @Input() cv: CV;
  @Input() modelForm: FormGroup;
  @Output() update: EventEmitter<CV> = new EventEmitter();
}
