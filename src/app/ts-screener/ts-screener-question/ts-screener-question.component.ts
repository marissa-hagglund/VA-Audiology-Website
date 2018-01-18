import { Component, Input, Output, EventEmitter, ViewChild, ContentChild } from '@angular/core';
import { TsScreenerDataService } from '../../services/ts-screener-data.service';

@Component({
  selector: 'screener-question',
  styleUrls: ['../ts-screener.component.css'],
  template: `
    <div class="row">
      <div class="col-sm-4 col-sm-offset-4 questionFont sectionWrap">{{statement}}</div>
    </div>
    <br>
    <div class="row">
      <div class="col-sm-4 col-sm-offset-4 questionFont sectionWrap">{{question}}</div>
    </div>
    <br>
    <div class="col-sm-4 col-sm-offset-4 questionFont" style="padding-left: 14%">
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" [(ngModel)]="selectedValue" type="radio" name="radioButton" value="{{radio1}}" [checked]="selectedValue === 'YES'">
          {{radio1}} <br>
          <input class="form-check-input" [(ngModel)]="selectedValue" type="radio" name="radioButton" value="{{radio2}}">
          {{radio2}} <br>
          <span *ngIf="radio3"><input class="form-check-input" [(ngModel)]="selectedValue" type="radio" name="radioButton" value="{{radio3}}">
          {{radio3}} </span>
        </label>
      </div>
    </div>
    <div class="row" style="margin-top: 100px">
      <div class="col-sm-4 col-sm-offset-4 questionFont sectionWrap">
        <button style="width: 100px;" class="btn btn-primary" (click)="onClickedBack.emit(selectedValue)">BACK</button>
        <button style="width: 100px;" class="btn btn-primary" (click)="onClickedNext.emit(selectedValue)">NEXT</button>
      </div>
    </div>
  `
})

export class TsScreenerQuestionComponent {
  @Input() public statement: string = 'During the PAST YEAR';
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
