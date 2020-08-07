// import { Component, OnInit } from "@angular/core";
// import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";

// @Component({
//   selector: "app-form",
//   templateUrl: "./form.component.html",
//   styleUrls: ["./form.component.css"],
// })
// export class FormComponent implements OnInit {
//   modelForm: FormGroup;
//   constructor(private formBuilder: FormBuilder) {}

//   ngOnInit() {
//     this.modelForm = this.formBuilder.group({
//       firstname: ['', Validators.required],
//       lastname: ['',[Validators.required, Validators.minLength(3)]],
//       positions: this.formBuilder.array([])
//      });
//   }

//   get positions() : FormArray {
//     return <FormArray>this.modelForm.get('positions');
//   }
  
//   buildPosition() : FormGroup {
//     return this.formBuilder.group({
//        job: '',
//        company: '',
//        city: ''
//      });
//   }
  
//   addPosition() : void {
//     this.positions.push(this.buildPosition())
//   }
  
//   removePosition(i) : void {
//     this.positions.removeAt(i);
//   }
  

//   onSubmit(form) {
//     console.log(form);
//   }
// }
