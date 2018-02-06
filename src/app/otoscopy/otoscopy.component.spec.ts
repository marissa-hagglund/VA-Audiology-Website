import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtoscopyComponent } from './otoscopy.component';

describe('OtoscopyComponent', () => {
  let component: OtoscopyComponent;
  let fixture: ComponentFixture<OtoscopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtoscopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtoscopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
