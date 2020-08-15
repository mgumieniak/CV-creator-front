import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorContainer } from './creator.container';

describe('CreatorcComponent', () => {
  let component: CreatorContainer;
  let fixture: ComponentFixture<CreatorContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
