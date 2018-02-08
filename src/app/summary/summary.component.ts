import { TsScreenerAnswerStrings } from './../common/custom-resource-strings';
import { Component, OnInit } from '@angular/core';
import { SurveyTitle, SectionTitle, Question, Description } from './summaryItem';
import { ThsDataService } from '../services/ths-data.service';
import { TsScreenerDataService } from '../services/ts-screener-data.service';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { ThsQuestionStrings, TsScreenerQuestionStrings, ThsAnswerStrings } from '../common/custom-resource-strings';
import { ThsQuestionComponent } from 'src/app/ths/ths-question/ths-question.component';
import { SummaryResolver } from '@angular/compiler';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  /**
   * the patiend id that will be displayed in the summary report.
   * It not connected to the real data yet.
   * to do.
   */
  public readonly patientID = 1234;

  /**
   * all the summary items that will be displayed in the summary report
   */
  public readonly summaryItems = [];

  /**
   *
   * @param thsDataService the data service for ths questionare
   * @param dataService the data service for ts screener.
   */
  constructor(private thsDataService: ThsDataService, private dataService: TsScreenerDataService) {
    this.constructTSScreenerReport();
    this.constructTHSReport();
  };

  public ngOnInit() {
  }

  /**
   * the function used to construct a ths report from the ths data services.
   */
  private constructTHSReport() {
    let history = this.thsDataService.history;
    let answers = this.thsDataService.dataRecord;
    if ( history.length <= 1 ) {
      return;
    }
    this.summaryItems.push(new SurveyTitle('Tinnius & Hearing Survey'));
    for ( let questionNum of history ){
      let question = this.grabTHSQuestions(questionNum);
      if ( answers.length < questionNum) {
        break;
      }
      if ( (questionNum - 1) % 4 === 0) {
        console.log(questionNum);
        this.summaryItems.push(new SectionTitle(this.grabTHSSectionTitle(questionNum), 16));
      }
      let answer = answers[questionNum - 1].choice as String;

      this.summaryItems.push(new Question(question, Number(answer.charAt(0)), '-1'));
    }
  }

  /**
   * the function that used to construct a TS Screener report for summary
   */
  private constructTSScreenerReport() {
    let history = this.dataService.history;
    let answers = this.dataService.dataRecord;
    if (history.length <= 1) {
      return;
    }
    this.summaryItems.push(new SurveyTitle('TS Screener'));
    for (let questionNum of history) {
      let question = this.getTSScreenerQuestions(questionNum);
      if ( answers.length < questionNum) {
        break;
      }
      let answer = answers[questionNum - 1].choice as String;
      this.summaryItems.push(new Question(question, this.getTSScreenerChoiceNo(answer), '-1'));
    }
  }

  /**
   * grab the section titles for ths survey.
   * @param questionNumber the question id that will be displayed.
   */
  private grabTHSSectionTitle(questionNumber: number) {
    let part = parseInt( '' + ( ( questionNumber - 1) / 4.0 ), null );
    switch ( part ) {
      case 0: return 'A. Tinnitus';
      case 1: return 'B. Hearing';
      case 2: return 'C. Sound Tolerance';
      default: return 'not assigned';
    }
  }

  /**
   * grab the question string for ths survey.
   * @param Qnumber the question id that will be displayed
   */
  private grabTHSQuestions(Qnumber: Number) {
    let thsQuestions = new ThsQuestionStrings();
    switch (Qnumber) {
      case 1: return thsQuestions.question1;
      case 2: return thsQuestions.question2;
      case 3: return thsQuestions.question3;
      case 4: return thsQuestions.question4;
      case 5: return thsQuestions.question5;
      case 6: return thsQuestions.question6;
      case 7: return thsQuestions.question7;
      case 8: return thsQuestions.question8;
      case 9: return thsQuestions.question9;
      case 10: return thsQuestions.question10;
      default: return 'missing';
    }
  }

  /**
   * grab the question string for ts screener.
   * @param Qnumber the question id that will be displayed
   */
  private getTSScreenerQuestions(Qnumber: Number) {
    let tsScreenerQuestions = new TsScreenerQuestionStrings();
    switch ( Qnumber ) {
      case 1: return tsScreenerQuestions.question1;
      case 2: return tsScreenerQuestions.question2;
      case 3: return tsScreenerQuestions.question3;
      case 4: return tsScreenerQuestions.question4;
      case 5: return tsScreenerQuestions.question5;
      case 6: return tsScreenerQuestions.question6;
      default: return 'missing';
    }
  }

  /**
   * grab the choice number by the answer string.
   * @param answer the answer strings that used to grab scores.
   */
  private getTSScreenerChoiceNo(answer: String) {
    let tsAnswers = new TsScreenerAnswerStrings();
    switch ( answer ) {
      case tsAnswers.YES: return 1;
      case tsAnswers.NO: return 0;
      case tsAnswers.ALWAYS: return 2;
      case tsAnswers.USUALLY: return 1;
      case tsAnswers.SOMETIMES_OCCASIONALLY: return 0;
      case tsAnswers.YES_ALWAYS: return 3;
      case tsAnswers.YES_SOMETIMES: return 0;
      case tsAnswers.DAILY_OR_WEEKLY_BASIS: return 2;
      case tsAnswers.MONTHLY_OR_YEARLY_BASIS: return 1;
      default: return -1;
    }
  }

}
