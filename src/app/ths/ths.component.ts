import { Component } from '@angular/core';
import { ThsQuestionStrings } from '../common/custom-resource-strings';
import { ThsStateflowService } from '../services/ths-stateflow.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ths',
  styleUrls: ['./ths.component.css'],
  template: `
  <div class="row">
    <div class="col-sm-6 col-md-6 col-lg-4" style="text-align: left;">
        <logo logoRouteOption="2"></logo>
    </div>
  </div>
  <h3 style="color: white" align="center">Tinnitus & Hearing Survey: Normative Standards</h3>
  <ths-question *ngIf="currentState === 1" [question]="questionStrings.question1" (onClickedBack)="moveStateBackward()" (onClickedNext)="moveStateForward($event)"></ths-question>
  <ths-question *ngIf="currentState === 2" [question]="questionStrings.question2" (onClickedBack)="moveStateBackward()" (onClickedNext)="moveStateForward($event)"></ths-question>
  <ths-question *ngIf="currentState === 3" [question]="questionStrings.question3" (onClickedBack)="moveStateBackward()" (onClickedNext)="moveStateForward($event)"></ths-question>
  <ths-question *ngIf="currentState === 4" [question]="questionStrings.question4" (onClickedBack)="moveStateBackward()" (onClickedNext)="moveStateForward($event)"></ths-question>
  <ths-question *ngIf="currentState === 5" [question]="questionStrings.question5" (onClickedBack)="moveStateBackward()" (onClickedNext)="moveStateForward($event)"></ths-question>
  <ths-question *ngIf="currentState === 6" [question]="questionStrings.question6" (onClickedBack)="moveStateBackward()" (onClickedNext)="moveStateForward($event)"></ths-question>
  <ths-question *ngIf="currentState === 7" [question]="questionStrings.question7" (onClickedBack)="moveStateBackward()" (onClickedNext)="moveStateForward($event)"></ths-question>
  <ths-question *ngIf="currentState === 8" [question]="questionStrings.question8" (onClickedBack)="moveStateBackward()" (onClickedNext)="moveStateForward($event)"></ths-question>
  <ths-question *ngIf="currentState === 9" [question]="questionStrings.question9" (onClickedBack)="moveStateBackward()" (onClickedNext)="moveStateForward($event)"></ths-question>
  <p *ngIf="currentState === 9" style="text-align: center; color: black; margin-top: 2%;">{{questionStrings.note}}</p>
  <ths-question *ngIf="currentState === 10" [question]="questionStrings.question10" (onClickedBack)="moveStateBackward()" (onClickedNext)="moveStateForward($event)"></ths-question>
`
})
export class ThsComponent {
  public currentState: number = 1;

  public questionStrings: ThsQuestionStrings = new ThsQuestionStrings();

  constructor(private stateMachine: ThsStateflowService,
              private router: Router) { };

  public moveStateBackward(): void {
    let prevState: number = this.stateMachine.moveStateBackward();

    if (prevState) {
      this.currentState = prevState;
    }
  }

  public moveStateForward(choice: string): void {
    console.log(choice);
    if (!choice) {
      return;
    }

    let nextState: number = this.stateMachine.moveStateForward(this.currentState, choice);

    this.currentState = nextState;

    if (this.currentState === 11) {
      this.router.navigateByUrl('/thank-you');
    }
  }
}
