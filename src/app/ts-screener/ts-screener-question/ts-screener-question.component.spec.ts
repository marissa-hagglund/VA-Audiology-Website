import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsScreenerQuestionComponent } from './ts-screener-question.component';

describe('TsScreenerQuestionComponent', () => {
  let component: TsScreenerQuestionComponent;
  let fixture: ComponentFixture<TsScreenerQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsScreenerQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsScreenerQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
