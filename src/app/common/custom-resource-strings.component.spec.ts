import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomResourceStringsComponent } from './custom-resource-strings.component';

describe('CustomResourceStringsComponent', () => {
  let component: CustomResourceStringsComponent;
  let fixture: ComponentFixture<CustomResourceStringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomResourceStringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomResourceStringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
