import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
@Component({
  selector: 'app-tfi-question',
  templateUrl: './tfi-question.component.html',
  styleUrls: ['./tfi-question.component.css']
})
export class TfiQuestionComponent implements OnInit {
  public selectedValue: number = 0;
  @Input() public question: string = '';
  @Input() public section: string = 'In the past year...';
  @Input() public percent: boolean = false;
  @Output() public onClickedBack: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onClickedNext: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  public ngOnInit() {
  }

}
