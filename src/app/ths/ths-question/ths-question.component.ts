import { Component, Input, Output, EventEmitter, ViewChild, ContentChild } from '@angular/core';
import { ThsAnswerStrings } from '../../common/custom-resource-strings';

@Component({
  selector: 'ths-question',
  styleUrls: ['../ths.component.css'],
  template: `
    <div class="row">
      <div class="col-sm-6 col-sm-offset-3 questionFont sectionWrap" style="text-align: center;">{{question}}</div>
    </div>
    <div *ngIf="question !== 'Please list two examples of sounds that are too loud or uncomfortable for you, but seem normal to others:'" class="row">
      <div class="col-sm-6 col-sm-offset-3 questionFont">
        <div class="form-check">
          <label class="form-check-label">
            <label><input class="form-check-input" [(ngModel)]="selectedValue" type="radio" name="radioButton" value="{{radio1}}">
            {{radio1}}</label> <br>
            <label><input class="form-check-input" [(ngModel)]="selectedValue" type="radio" name="radioButton" value="{{radio2}}">
            {{radio2}}</label> <br>
            <label><input class="form-check-input" [(ngModel)]="selectedValue" type="radio" name="radioButton" value="{{radio3}}">
            {{radio3}}</label><br>
            <label><input class="form-check-input" [(ngModel)]="selectedValue" type="radio" name="radioButton" value="{{radio4}}">
            {{radio4}}</label> <br>
            <label><input class="form-check-input" [(ngModel)]="selectedValue" type="radio" name="radioButton" value="{{radio5}}">
            {{radio5}}</label> <br>
          </label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 col-sm-offset-3 questionFont sectionWrap">
        <button style="width: 48%; float: left;" class="btn btn-primary" (click)="onClickedBack.emit(selectedValue)">BACK</button>
        <button style="width: 48%; float: right;" class="btn btn-primary" (click)="onClickedNext.emit(selectedValue)">NEXT</button>
      </div>
    </div>
    <mat-radio-group>
    <mat-radio-button value="1">Option 1</mat-radio-button>
    <mat-radio-button value="2">Option 2</mat-radio-button>
  </mat-radio-group>
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
