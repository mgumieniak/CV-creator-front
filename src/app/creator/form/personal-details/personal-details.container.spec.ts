import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsContainer } from './personal-details.container';

describe('PersonalDetailscComponent', () => {
  let component: PersonalDetailsContainer;
  let fixture: ComponentFixture<PersonalDetailsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDetailsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
