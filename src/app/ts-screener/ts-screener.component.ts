import { Component } from '@angular/core';
import {TsScreenerAnswerStrings, TsScreenerQuestionStrings} from "../common/custom-resource-strings";
import {TsScreenerStateflowService} from "../services/ts-screener-stateflow.service";
import {Router} from "@angular/router";

@Component({
  selector: 'screener',
  styleUrls: ['./ts-screener.component.css'],
  template: `
    <logo></logo>
    <h3 style="color: white" align="center">Tinnitus Screener</h3>
    <screener-question *ngIf="currentState === 1" [question]="questionStrings.question1" (onClickedBack)="moveStateBackward()" (onClickedNext)="moveStateForward($event)"></screener-question>
    <screener-question *ngIf="currentState === 2" [question]="questionStrings.question2" (onClickedBack)="moveStateBackward()" (onClickedNext)="moveStateForward($event)"></screener-question>
    <screener-question *ngIf="currentState === 3" [question]="questionStrings.question3" [radio1]="answerStrings.ALWAYS" [radio2]="answerStrings.USUALLY" [radio3]="answerStrings.SOMETIMES_OCCASIONALLY"
                       (onClickedBack)="moveStateBackward()" (onClickedNext)="moveStateForward($event)"></screener-question>
    <screener-question *ngIf="currentState === 4" [question]="questionStrings.question4" [radio1]="answerStrings.YES_ALWAYS" [radio2]="answerStrings.YES_SOMETIMES" [radio3]="answerStrings.NO"
                       (onClickedBack)="moveStateBackward()" (onClickedNext)="moveStateForward($event)"></screener-question>
    <screener-question *ngIf="currentState === 5" [question]="questionStrings.question5" (onClickedBack)="moveStateBackward()" (onClickedNext)="moveStateForward($event)"></screener-question>
    <screener-question *ngIf="currentState === 6" [question]="questionStrings.question6" [radio1]="answerStrings.DAILY_OR_WEEKLY_BASIS" [radio2]="answerStrings.MONTHLY_OR_YEARLY_BASIS"
                       (onClickedBack)="moveStateBackward()" (onClickedNext)="moveStateForward($event)"></screener-question>
  `
})

export class TsScreenerComponent {
  private currentState: number = 1;

  questionStrings: TsScreenerQuestionStrings = new TsScreenerQuestionStrings;
  answerStrings: TsScreenerAnswerStrings = new TsScreenerAnswerStrings;

  constructor(private stateMachine: TsScreenerStateflowService,
              private router: Router) {};

  moveStateBackward(): void {
    let prevState:number = this.stateMachine.moveStateBackward();

    if (prevState) {
      this.currentState = prevState;
    }
  }

  moveStateForward(choice: string): void {
    console.log(choice);
    if (!choice) {
      return;
    }

    let nextState: number = this.stateMachine.moveStateForward(this.currentState, choice);

    this.currentState = nextState;

    if (this.currentState == 7) {
      this.router.navigateByUrl('/thank-you');
    }
  }
}

