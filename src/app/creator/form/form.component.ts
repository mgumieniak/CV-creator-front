import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import {CV} from 'src/app/model/data';
import {RestClientService} from 'src/app/model/rest-client.service';

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

  constructor(private formBuilder: FormBuilder, private restClient: RestClientService) {
  }

  ngOnInit() {
    this.modelForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', [Validators.required]],
      additionDetails: this.formBuilder.array([]),
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    });
  }

  buildPosition(): FormGroup {
    return this.formBuilder.group({
      description: '',
      property: '',
    });
  }

  get additionDetails(): FormArray {
    return this.modelForm.get('additionDetails') as FormArray;
  }

  addAdditionDetails(): void {
    this.additionDetails.push(this.buildPosition());
  }

  removeAdditionDetails(i): void {
    this.additionDetails.removeAt(i);
  }

  getEmailErrorMessage() {
    if (this.modelForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.modelForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  isEmailValid() {
    return this.modelForm.get('email').invalid;
  }

  updateGivenCV(form): void {
    console.log(form);
    this.update.emit(this.cv);
  }

}
