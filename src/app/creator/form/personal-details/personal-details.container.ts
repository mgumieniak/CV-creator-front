import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {RestClientService} from '../../../model/rest-client.service';
import {CvService} from '../../cv.service';
import {noop} from 'rxjs';
import {CV} from '../../../model/data';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

export const FIRSTNAME = 'firstname';
export const LASTNAME = 'lastname';
export const EMAIL = 'email';
export const PHONE = 'phone';
export const ADDITION_DETAILS = 'additionDetails';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.container.html',
  styleUrls: ['./personal-details.container.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsContainer implements OnInit {
  @Input() cv: CV;

  constructor(private restClient: RestClientService,
              private cvService: CvService,
              private formBuilder: FormBuilder) {
  }

  personalDetailsForm: FormGroup;

  ngOnInit() {
    this.personalDetailsForm = this.formBuilder.group({
      firstname: [this.cv.personalDetails.get(FIRSTNAME), Validators.required],
      lastname: [this.cv.personalDetails.get(LASTNAME), [Validators.required]],
      additionDetails: this.formBuilder.array([]),
      email: [this.cv.personalDetails.get(EMAIL), [Validators.required, Validators.email]],
      phone: [this.cv.personalDetails.get(PHONE), [Validators.required]],
    });
    this.addAdditionDetails();
  }

  private addAdditionDetails(): void {
    this.cv.personalDetails.get(ADDITION_DETAILS).forEach((value, key) => {
      this.additionDetails.push(this.buildPosition(value, key));
    });
  }

  private get additionDetails(): FormArray {
    return this.personalDetailsForm.get(ADDITION_DETAILS) as FormArray;
  }

  private buildPosition(value: string, key: string): FormGroup {
    return this.formBuilder.group({
      description: key,
      property: value,
    });
  }

  update(cv: CV): void {
    this.restClient.update(cv).subscribe({
      next: (updatedCv) => this.cvService.updateGivenCv(updatedCv),
      error: noop,
    });
  }
}
