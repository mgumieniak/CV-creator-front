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

  // constructor(
  //   private restClient: RestClientService,
  //   private cvService: CvService,
  //   private formBuilder: FormBuilder
  // ) {
  // }
  //
  // modelForm: FormGroup;
  //
  // ngOnInit() {
  //   this.modelForm = this.formBuilder.group({
  //     firstname: [this.cv.personalDetails.get('firstname'), Validators.required],
  //     lastname: [this.cv.personalDetails.get('lastname'), [Validators.required]],
  //     additionDetails: this.formBuilder.array([]),
  //     email: [this.cv.personalDetails.get('email'), [Validators.required, Validators.email]],
  //     phone: [this.cv.personalDetails.get('phone'), [Validators.required]],
  //   });
  //   this.addAdditionDetails();
  // }
  //
  // private addAdditionDetails(): void {
  //   this.cv.personalDetails.get('additionDetails').forEach((value, key) => {
  //     this.additionDetails.push(this.buildPosition(value, key));
  //   });
  // }
  //
  // private get additionDetails(): FormArray {
  //   return this.modelForm.get('additionDetails') as FormArray;
  // }
  //
  // private buildPosition(value: string, key: string): FormGroup {
  //   return this.formBuilder.group({
  //     description: key,
  //     property: value,
  //   });
  // }
  //
  // update(cv: CV): void {
  //   this.restClient.update(cv).subscribe({
  //     next: (updatedCv) => this.cvService.updateGivenCv(updatedCv),
  //     error: noop,
  //   });
  // }

}
