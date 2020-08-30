import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicStarRatingComponent } from './dynamic-star-rating.component';

describe('DynamicStarRatingComponent', () => {
  let component: DynamicStarRatingComponent;
  let fixture: ComponentFixture<DynamicStarRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicStarRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicStarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
