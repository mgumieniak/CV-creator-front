import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceContainer } from './experience.container';

describe('ExperiencesComponent', () => {
  let component: ExperienceContainer;
  let fixture: ComponentFixture<ExperienceContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
