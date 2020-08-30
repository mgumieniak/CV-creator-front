import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingContainer } from './rating.container';

describe('StarsRatingComponent', () => {
  let component: RatingContainer;
  let fixture: ComponentFixture<RatingContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
