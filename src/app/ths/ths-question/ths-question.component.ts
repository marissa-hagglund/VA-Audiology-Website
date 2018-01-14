import {Component, Input, Output, EventEmitter, ViewChild, ContentChild} from '@angular/core';
import { ThsAnswerStrings } from "../../common/custom-resource-strings";

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
    `
})

export class ThsQuestionComponent {
  answerStrings: ThsAnswerStrings = new ThsAnswerStrings;

  @Input() question: string = "";
  @Input() radio1: string = this.answerStrings.No;
  @Input() radio2: string = this.answerStrings.Small_Yes;
  @Input() radio3: string = this.answerStrings.Moderate_Yes;
  @Input() radio4: string = this.answerStrings.Big_Yes;
  @Input() radio5: string = this.answerStrings.Very_Big_Yes;

  @Output() onClickedBack: EventEmitter<string> = new EventEmitter<string>();
  @Output() onClickedNext: EventEmitter<string> = new EventEmitter<string>();

  selectedValue: string = '';

  constructor() {};
}
