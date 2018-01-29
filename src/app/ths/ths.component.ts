import { Component } from '@angular/core';
import { ThsQuestionStrings } from '../common/custom-resource-strings';
import { ThsStateflowService } from '../services/ths-stateflow.service';
import { Router } from '@angular/router';
import { RouterGuards } from '../services/router-guards.service';

@Component({
  selector: 'app-ths',
  styleUrls: ['./ths.component.css'],
  template: `
  <div class="row">
    <div class="col-sm-6 col-md-6 col-lg-4" style="text-align: left;">
        <logo logoRouteOption="2"></logo>
    </div>
  </div>
  <h3 style="color: white" align="center">Tinnitus & Hearing Survey</h3>
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

  // This function uses the stateflow service to determine what the previous state
  // should be (right now, it'll jsut be sequential) and then sets that as the current state
  // To the user it'll be reflected in hitting a back button to go back to their previous question
  public moveStateBackward(): void {
    let prevState: number = this.stateMachine.moveStateBackward();

    if (prevState) {
      this.currentState = prevState;
    }
  }

  // This function takes in the answer the user chose from the radio buttons and
  // utilizes the stateflow service to move forward one question while saving the data.
  // however, if it is at the end, it will go to the tfi or, if the user selected no
  // on the ts, it will route to the thank you page
  public moveStateForward(choice: string): void {
    console.log(choice);
    if (!choice) {
      return;
    }

    let nextState: number = this.stateMachine.moveStateForward(this.currentState, choice);

    this.currentState = nextState;

    // if the no was not selected for Q1 on TS, routes to tfi like normal
    // If it was, then tfi is skipped
    if (this.currentState === 11) {
        let nextComponent = sessionStorage.getItem('nextComponent'); //will be null if this doesn't exist (meaning it wasn't even set)
        if(nextComponent === 'true') { // if it is finished
            sessionStorage.removeItem('nextComponent'); //clears it right after use
            this.router.navigateByUrl('/thank-you');
        } else { // If it is not finished
            this.router.navigateByUrl('/tfi');
        }
    }
  }
}
