import { Component, Input, Output, EventEmitter, ViewChild, ContentChild } from '@angular/core';
import { ThsAnswerStrings } from '../../common/custom-resource-strings';

@Component({
  selector: 'ths-question',
  styleUrls: ['./ths-question.component.css'],
  template: `
    <h2 style="color: black;" align="center">{{question}}</h2>
    <div *ngIf="question !== 'Please list two examples of sounds that are too loud or uncomfortable for you, but seem normal to others:'; else input_questions" class="row">
      <div class="col-sm-4 col-sm-offset-3 col-xs-offset-2 questionFont">
        <div class="form-check">
          <mat-radio-group [(ngModel)]="selectedValue" class = "options" >
            <mat-radio-button value="{{radio1}}">{{radio1}}</mat-radio-button> <br>
            <mat-radio-button value="{{radio2}}">{{radio2}}</mat-radio-button> <br>
            <mat-radio-button value="{{radio3}}">{{radio3}}</mat-radio-button> <br>
            <mat-radio-button value="{{radio4}}">{{radio4}}</mat-radio-button> <br>
            <mat-radio-button value="{{radio5}}">{{radio5}}</mat-radio-button> <br>
          </mat-radio-group>
        </div>
      </div>
    </div>
    <ng-template #input_questions>
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
      <form class="inputForm">
        <mat-form-field class="fields">
        <textarea matInput placeholder="Example 1 & 2:" value="{{selectedValue}}" [(ngModel)]="selectedValue" name="textBox"></textarea>
        </mat-form-field><br>
      </form>
      </div>
    <div class="col-sm-3"></div>
    </ng-template>
    <div class="row">
      <div class="col-sm-6 col-sm-offset-3 sectionWrap" style="padding-top: 2%;">
        <button style="width: 48%; float: left;" class="btn btn-primary" (click)="onClickedBack.emit(selectedValue)">BACK</button>
        <button style="width: 48%; float: right;" class="btn btn-primary" (click)="onClickedNext.emit(selectedValue)">NEXT</button>
      </div>
    </div>
    `
})

export class ThsQuestionComponent {
  public answerStrings: ThsAnswerStrings = new ThsAnswerStrings();

  @Input() public question: string = '';
  @Input() public radio1: string = this.answerStrings.NO;
  @Input() public radio2: string = this.answerStrings.SMALL_YES;
  @Input() public radio3: string = this.answerStrings.MODERATE_YES;
  @Input() public radio4: string = this.answerStrings.BIG_YES;
  @Input() public radio5: string = this.answerStrings.VERY_BIG_YES;

  @Output() public onClickedBack: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onClickedNext: EventEmitter<string> = new EventEmitter<string>();

  public selectedValue: string = '';

  constructor() {};
}
