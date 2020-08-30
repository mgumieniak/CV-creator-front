import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-star-rating-ui',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class StarRatingComponent implements OnInit {
  @Input() rating;
  @Input() starCount = 5;
  @Output() ratingUpdated = new EventEmitter();

  ratingArr = [];

  constructor() {
  }

  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  onClick(rating: number) {
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}


