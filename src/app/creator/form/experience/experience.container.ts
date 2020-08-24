import {Component, Input, OnInit} from '@angular/core';
import {CV, Experience} from '../../../model/data';
import {RestClientService} from '../../../model/rest-client.service';
import {CvService} from '../../cv.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {noop} from 'rxjs';

export const EXPERIENCE = 'experience';
export const COMPANY = 'company';
export const POSITION = 'position';
export const START_DATE = 'startDate';
export const END_DATE = 'endDate';
export const DESCRIPTION = 'description';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.container.html',
  styleUrls: ['./experience.container.css']
})
export class ExperienceContainer implements OnInit {
  @Input() cv: CV;

  constructor(private restClient: RestClientService,
              private cvService: CvService,
              private formBuilder: FormBuilder) {
  }

  experienceForm: FormGroup;

  ngOnInit() {
    this.experienceForm = this.formBuilder.group({
      experience: this.formBuilder.array([])
    });
    this.addAdditionDetails();
  }

  private addAdditionDetails(): void {
    this.cv.experiences.forEach((experience) => {
      this.experiences.push(this.buildPosition(experience));
    });
  }

  private get experiences(): FormArray {
    return this.experienceForm.get(EXPERIENCE) as FormArray;
  }

  private buildPosition(experience: Experience): FormGroup {
    return this.formBuilder.group({
      company: experience.company,
      position: experience.position,
      startDate: experience.startDate,
      endDate: experience.endDate,
      description: experience.description,
    });
  }

  update(cv: CV): void {
    this.restClient.update(cv).subscribe({
      next: (updatedCv) => this.cvService.updateGivenCv(updatedCv),
      error: noop,
    });
  }
}
