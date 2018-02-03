import { Component, OnInit } from '@angular/core';
import { SurveyTitle, SectionTitle, Question, Description} from './summaryItem';
import { ThsDataService } from '../services/ths-data.service';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { ThsQuestionStrings, TsScreenerQuestionStrings } from '../common/custom-resource-strings'
import { ThsQuestionComponent } from 'src/app/ths/ths-question/ths-question.component';
import { TsScreenerDataService } from 'src/app/services/ts-screener-data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  patientID = 1234; // numbers just for test\par
  // summaryItems = [new SurveyTitle("survey title test"),
  //                 new SectionTitle("section title", 16),
  //                 new Question("question test", 5),
  //                 new Description("description test")];
  summaryItems = [];
  constructor(private thsDataService: ThsDataService) {
    this.constructTHSReport(thsDataService);
  };

  private constructTHSReport(thsDataService: ThsDataService) {
    this.summaryItems.push(new SurveyTitle('Tinnius & Hearing Survey'));
    let history = this.thsDataService.history;
    let answers = this.thsDataService.dataRecord;
    let items = [];
    
    var index = 0;
    this.summaryItems.push(new SectionTitle('Test section title', 16));
    for (let questionNum of history){
      let question = this.grabTHSQuestions(questionNum);
      this.summaryItems.push(new Question(question, history[questionNum]));
      ++index;
    }
    
    this.summaryItems.push(new SurveyTitle('TS Screener'));
    // need ts-screener data service to public the history and answers.
  }

  private grabTHSQuestions(number: Number) {
    let thsQuestions = new ThsQuestionStrings();
    switch (number){
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
    }
  }

  private getTSScreenerQuestions(number: Number) {
    let tsScreenerQuestions = new TsScreenerQuestionStrings();
    switch(number) {
      case 1: return tsScreenerQuestions.question1;
      case 2: return tsScreenerQuestions.question2;
      case 3: return tsScreenerQuestions.question3;
      case 4: return tsScreenerQuestions.question4;
      case 5: return tsScreenerQuestions.question5;
      case 6: return tsScreenerQuestions.question6;
    }
  }

  
  public ngOnInit() {
  }

}
