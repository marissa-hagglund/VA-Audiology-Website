import { Component } from '@angular/core';
import { TfiDataService } from '../services/tfi-data.service';
import { Router } from '@angular/router';
// import { MatSliderModule } from '@angular/material/slider';
import { TfiQuestionStrings, TfiSectionStrings } from '../common/custom-resource-strings';

@Component({
  selector: 'tfi',
  templateUrl: './tfi.component.html',
  styleUrls: ['./tfi.component.css']
})
// Main componenet of the Tinnitus Functional Index
export class TfiComponent {
  public currentState: number = 0;
  private questions: TfiQuestionStrings = new TfiQuestionStrings();
  private sections: TfiSectionStrings =  new TfiSectionStrings();
  constructor(public router: Router,
              private dataService: TfiDataService) { }

  // Step back by one question
  public moveStateBackward(): void {
    if (this.currentState === 0) {
      return;
    }
    this.dataService.moveStateBackward(this.currentState);
    --this.currentState;
  }
  // Step forward by one question. If we've reached the end, route to thank-you page
  public moveStateForward(choice: string): void {
    if (!choice) {
      return;
    }
    this.dataService.saveData(this.currentState, +choice);
    if (this.currentState === 24) {
      this.router.navigateByUrl('/thank-you');
    }
    ++this.currentState;
  }

}
