import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { CV } from 'src/app/model/data';

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent{
  @Input() cv: CV;
  @Output() update: EventEmitter<CV> = new EventEmitter();

  // modelForm: FormGroup;
  // constructor(private formBuilder: FormBuilder) {}

  // ngOnInit() {
  //   this.modelForm = this.formBuilder.group({
  //     firstname: ['', Validators.required],
  //     lastname: ['',[Validators.required, Validators.minLength(3)]],
  //     positions: this.formBuilder.array([])
  //    });
  // }

  // get positions() : FormArray {
  //   return <FormArray>this.modelForm.get('positions');
  // }
  
  // buildPosition() : FormGroup {
  //   return this.formBuilder.group({
  //      job: '',
  //      company: '',
  //      city: ''
  //    });
  // }
  
  addPosition() : void {
    console.log(this.cv);
  }

  updateGivenCV() : void{
    this.update.emit(new CV());
  }
  
  // removePosition(i) : void {
  //   this.positions.removeAt(i);
  // }
  

  // onSubmit(form) {
  //   console.log(form);
  // }
}
