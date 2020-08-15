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
export class FormComponent implements OnInit {
  @Input() cv: CV;
  @Output() update: EventEmitter<CV> = new EventEmitter();

  modelForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.modelForm = this.formBuilder.group({
      firstname: [this.cv.personalDetails.get('firstname'), Validators.required],
      lastname: [this.cv.personalDetails.get('lastname'), [Validators.required]],
      additionDetails: this.formBuilder.array([]),
      email: [this.cv.personalDetails.get('email'), [Validators.required, Validators.email]],
      phone: [this.cv.personalDetails.get('phone'), [Validators.required]],
    });
  }
}
