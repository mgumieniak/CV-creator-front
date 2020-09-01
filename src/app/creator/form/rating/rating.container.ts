import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CV} from '../../../model/data';
import {RestClientService} from '../../../model/rest-client.service';
import {CvService} from '../../cv.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {noop} from 'rxjs';

export const RATINGS = 'ratings';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.container.html',
  styleUrls: ['./rating.container.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingContainer implements OnInit {
  @Input() cv: CV;

  constructor(private restClient: RestClientService,
              private cvService: CvService,
              private formBuilder: FormBuilder) {
  }

  ratingForm: FormGroup;

  ngOnInit() {
    this.ratingForm = this.formBuilder.group({
      ratings: this.formBuilder.array([])
    });
    this.fillRatingForm();
  }

  private fillRatingForm(): void {
    this.cv.skillToRating.forEach((rate, skill) => {
      this.ratings.push(this.buildRate(skill, rate));
    });
  }

  private buildRate(skill: string, rate: number): FormGroup {
    return this.formBuilder.group({
      value: [{description: skill, property: rate}]
    });
  }

  private get ratings(): FormArray {
    return this.ratingForm.get(RATINGS) as FormArray;
  }

  update(cv: CV): void {
    this.restClient.update(cv).subscribe({
      next: (updatedCv) => this.cvService.updateGivenCv(updatedCv),
      error: noop,
    });
  }

}
