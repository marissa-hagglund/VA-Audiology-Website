import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThsQuestionComponent } from './ths-question.component';

describe('ThsQuestionComponent', () => {
  let component: ThsQuestionComponent;
  let fixture: ComponentFixture<ThsQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThsQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThsQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
