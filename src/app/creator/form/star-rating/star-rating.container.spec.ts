import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingContainer } from './star-rating.container';

describe('StarsRatingComponent', () => {
  let component: StarRatingContainer;
  let fixture: ComponentFixture<StarRatingContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarRatingContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRatingContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
