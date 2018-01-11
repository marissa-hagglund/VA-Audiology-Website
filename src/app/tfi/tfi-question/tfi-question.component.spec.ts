import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfiQuestionComponent } from './tfi-question.component';

describe('TfiQuestionComponent', () => {
  let component: TfiQuestionComponent;
  let fixture: ComponentFixture<TfiQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfiQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfiQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
