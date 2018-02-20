import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { SummaryComponent } from './summary.component';
import {
  ThsQuestionStrings, TsScreenerAnswerStrings,
  TsScreenerQuestionStrings
} from '../common/custom-resource-strings';
import { ThsDataService } from '../services/ths-data.service';
import { TsScreenerDataService } from '../services/ts-screener-data.service';
import { TfiDataService } from '../services/tfi-data.service';
describe('TfiComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ThsDataService, TsScreenerDataService, TfiDataService],
      declarations: [SummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    // service = TestBed.get(SummaryComponent);
  });
  describe('constructTHSReport', () => {
    it('should not set summary to anything', () => {
      component.constructTHSReport();
      expect(component.summaryItems.length).toEqual(0);
    });
  });
  describe('constructTSReport', () => {
    it('should not set summary to anything', () => {
      component.constructTSReport();
      expect(component.summaryItems.length).toEqual(0);
    });
  });
  describe('getTHSSectionTitle', () => {
    it('should return A', () => {
      expect(component.getTHSSectionTitle(1)).toEqual('A. Tinnitus');
    });
    it('should return B', () => {
      expect(component.getTHSSectionTitle(5)).toEqual('B. Hearing');
    });
    it('should return C', () => {
      expect(component.getTHSSectionTitle(9)).toEqual('C. Sound Tolerance');
    });
  });
  describe('getTHSQuestions', () => {
    it('should return question1', () => {
      let questions = new ThsQuestionStrings();
      expect(component.getTHSQuestion(1)).toEqual(questions.question1);
    });
    it('should return question2', () => {
      let questions = new ThsQuestionStrings();
      expect(component.getTHSQuestion(2)).toEqual(questions.question2);
    });
    it('should return question3', () => {
      let questions = new ThsQuestionStrings();
      expect(component.getTHSQuestion(3)).toEqual(questions.question3);
    });
    it('should return question4', () => {
      let questions = new ThsQuestionStrings();
      expect(component.getTHSQuestion(4)).toEqual(questions.question4);
    });
    it('should return question5', () => {
      let questions = new ThsQuestionStrings();
      expect(component.getTHSQuestion(5)).toEqual(questions.question5);
    });
    it('should return question6', () => {
      let questions = new ThsQuestionStrings();
      expect(component.getTHSQuestion(6)).toEqual(questions.question6);
    });
    it('should return question7', () => {
      let questions = new ThsQuestionStrings();
      expect(component.getTHSQuestion(7)).toEqual(questions.question7);
    });
    it('should return question8', () => {
      let questions = new ThsQuestionStrings();
      expect(component.getTHSQuestion(8)).toEqual(questions.question8);
    });
    it('should return question9', () => {
      let questions = new ThsQuestionStrings();
      expect(component.getTHSQuestion(9)).toEqual(questions.question9);
    });
    it('should return question10', () => {
      let questions = new ThsQuestionStrings();
      expect(component.getTHSQuestion(10)).toEqual(questions.question10);
    });
  });
  describe('getTSQuestions', () => {
    it('should return question1', () => {
      let questions = new TsScreenerQuestionStrings();
      expect(component.getTSQuestion(1)).toEqual(questions.question1);
    });
    it('should return question2', () => {
      let questions = new TsScreenerQuestionStrings();
      expect(component.getTSQuestion(2)).toEqual(questions.question2);
    });
    it('should return question3', () => {
      let questions = new TsScreenerQuestionStrings();
      expect(component.getTSQuestion(3)).toEqual(questions.question3);
    });
    it('should return question4', () => {
      let questions = new TsScreenerQuestionStrings();
      expect(component.getTSQuestion(4)).toEqual(questions.question4);
    });
    it('should return question5', () => {
      let questions = new TsScreenerQuestionStrings();
      expect(component.getTSQuestion(5)).toEqual(questions.question5);
    });
    it('should return question6', () => {
      let questions = new TsScreenerQuestionStrings();
      expect(component.getTSQuestion(6)).toEqual(questions.question6);
    });
    it('should return missing', () => {
      let questions = new TsScreenerQuestionStrings();
      expect(component.getTSQuestion(100)).toEqual('missing');
    });
  });
  describe('getTSChoiceNumber', () => {
    it('should return 1 on YES', () => {
      let questions = new TsScreenerAnswerStrings();
      expect(component.getTSChoiceNumber(questions.YES)).toEqual(1);
    });
    it('should return 0 on NO', () => {
      let questions = new TsScreenerAnswerStrings();
      expect(component.getTSChoiceNumber(questions.NO)).toEqual(0);
    });
    it('should return 2 on ALWAYS', () => {
      let questions = new TsScreenerAnswerStrings();
      expect(component.getTSChoiceNumber(questions.ALWAYS)).toEqual(2);
    });
    it('should return 1 on USUALLY', () => {
      let questions = new TsScreenerAnswerStrings();
      expect(component.getTSChoiceNumber(questions.USUALLY)).toEqual(1);
    });
    it('should return 0 on SOMETIMES_OCCASIONALLY', () => {
      let questions = new TsScreenerAnswerStrings();
      expect(component.getTSChoiceNumber(questions.SOMETIMES_OCCASIONALLY)).toEqual(0);
    });
    it('should return 3 on YES_ALWAYS', () => {
      let questions = new TsScreenerAnswerStrings();
      expect(component.getTSChoiceNumber(questions.YES_ALWAYS)).toEqual(3);
    });
    it('should return 0 on YES_SOMETIMES', () => {
      let questions = new TsScreenerAnswerStrings();
      expect(component.getTSChoiceNumber(questions.YES_SOMETIMES)).toEqual(0);
    });
    it('should return 2 on DAILY_OR_WEEKLY_BASIS', () => {
      let questions = new TsScreenerAnswerStrings();
      expect(component.getTSChoiceNumber(questions.DAILY_OR_WEEKLY_BASIS)).toEqual(2);
    });
    it('should return 1 on MONTHLY_OR_YEARLY_BASIS', () => {
      let questions = new TsScreenerAnswerStrings();
      expect(component.getTSChoiceNumber(questions.MONTHLY_OR_YEARLY_BASIS)).toEqual(1);
    });
    it('should return -1 on TEST', () => {
      let questions = new TsScreenerAnswerStrings();
      expect(component.getTSChoiceNumber('TEST')).toEqual(-1);
    });
  });
});
