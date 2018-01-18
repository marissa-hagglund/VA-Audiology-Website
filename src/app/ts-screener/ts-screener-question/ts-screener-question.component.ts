import { Component, Input, Output, EventEmitter, ViewChild, ContentChild } from '@angular/core';
import { TsScreenerDataService } from '../../services/ts-screener-data.service';

@Component({
  selector: 'screener-question',
  styleUrls: ['./ts-screener-question.component.css'],
  template: `
    <h2 style="color: black;" align="center">{{statement}}</h2>
    <h2 style="color: black;" align="center">{{question}}</h2>
    <div class="col-sm-4 col-sm-offset-4 col-xs-offset-4 questionFont" style="padding-left: 14%">
      <div class="form-check">
      <mat-radio-group [(ngModel)]="selectedValue" class = "options" >
        <mat-radio-button value="{{radio1}}">{{radio1}}</mat-radio-button> <br>
        <mat-radio-button value="{{radio2}}">{{radio2}}</mat-radio-button> <br>
          <span *ngIf="radio3"><mat-radio-button value="{{radio3}}">{{radio3}}</mat-radio-button></span>
      </mat-radio-group>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 col-sm-offset-3 questionFont sectionWrap" style="padding-top: 2%;">
        <button style="width: 48%; float: left;" class="btn btn-primary" (click)="onClickedBack.emit(selectedValue)">BACK</button>
        <button style="width: 48%; float: right;" class="btn btn-primary" (click)="onClickedNext.emit(selectedValue)">NEXT</button>
      </div>
    </div>
  `
})

export class TsScreenerQuestionComponent {
  @Input() public statement: string = 'During the PAST YEAR:';
  @Input() public question: string = '';
  @Input() public showThirdRadioButton: boolean = false;
  @Input() public radio1: string = 'YES';
  @Input() public radio2: string = 'NO';
  @Input() public radio3: string = null;

  @Output() public onClickedBack: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onClickedNext: EventEmitter<string> = new EventEmitter<string>();

  public selectedValue: string = '';

  constructor(private dataService: TsScreenerDataService) {};
}
