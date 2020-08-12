import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { CV } from 'src/app/model/data';
import { RestClientService } from 'src/app/model/rest-client.service';

@Component({
  selector: "app-form-ui",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent{
  @Input() cv: CV;
  @Output() update: EventEmitter<CV> = new EventEmitter();

  modelForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private restClient: RestClientService) {}

  ngOnInit() {
    this.modelForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['',[Validators.required]],
      positions: this.formBuilder.array([]),
      email: ['', [Validators.required, Validators.email]],
      phone: ['',[Validators.required]],
     });
  }

   buildPosition() : FormGroup {
    return this.formBuilder.group({
       job: '',
       company: '',
       city: ''
     });
  }

  getEmailErrorMessage() {
    if (this.modelForm.get("email").hasError('required')) {
      return 'You must enter a value';
    }

    return this.modelForm.get("email").hasError('email') ? 'Not a valid email' : '';
  }

  isEmailvalid(){
    return this.modelForm.get("email").invalid;
  }

  get positions() : FormArray {
    return <FormArray>this.modelForm.get('positions');
  }
  
  addPosition() : void {
    console.dir(this.cv);
  }

  updateGivenCV() : void{
    let personalDetails = {
      name: "Maciej",
      surname: "Gumieniak",
      photo: "1"
    };
    let experience = {
      company: "kimerli",
      position: "java dev",
    };

    let updatedCv = new CV();
    updatedCv.id="1"
    updatedCv.experience = new Map(Object.entries(experience))
    updatedCv.personalDetails = new Map(Object.entries(personalDetails))
    this.update.emit(updatedCv);
  }
  
  removePosition(i) : void {
    this.positions.removeAt(i);
  }
  

  onSubmit(form) {
    console.log(form);
  }


}
