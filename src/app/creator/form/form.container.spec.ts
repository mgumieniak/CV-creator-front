import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContainer } from './form.container';

describe('FormContainer', () => {
  let component: FormContainer;
  let fixture: ComponentFixture<FormContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
