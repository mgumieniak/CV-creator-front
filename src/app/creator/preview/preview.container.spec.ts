import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewContainer } from './preview.container';

describe('PreviewcComponent', () => {
  let component: PreviewContainer;
  let fixture: ComponentFixture<PreviewContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
