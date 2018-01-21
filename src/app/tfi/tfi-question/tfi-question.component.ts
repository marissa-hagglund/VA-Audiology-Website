import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
@Component({
  selector: 'app-tfi-question',
  templateUrl: './tfi-question.component.html',
  styleUrls: ['./tfi-question.component.css']
})
export class TfiQuestionComponent implements OnInit {
  @Input() private question: string = '';
  @Input() private section: string = 'In the past year...';
  @Input() private percent: boolean = false;
  @Output() private onClickedBack: EventEmitter<string> = new EventEmitter<string>();
  @Output() private onClickedNext: EventEmitter<string> = new EventEmitter<string>();
  private selectedValue: number = 0;
  constructor() { }

  public ngOnInit() {
  }

}
