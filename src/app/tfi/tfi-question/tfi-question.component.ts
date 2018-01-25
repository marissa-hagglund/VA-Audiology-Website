import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-tfi-question',
  templateUrl: './tfi-question.component.html',
  styleUrls: ['./tfi-question.component.css']
})
export class TfiQuestionComponent implements OnInit {
  public selectedValue = '5';
  @Input() public question: string = '';
  @Input() public section: string = 'In the past year...';
  @Input() public percent: boolean = false;
  @Output() public onClickedBack: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onClickedNext: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  public ngOnInit() {
    if (this.percent === true) {
      this.selectedValue = '50';
    }
  }

}
