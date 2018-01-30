import { Component } from '@angular/core';
import { TfiDataService } from '../services/tfi-data.service';
import { Router } from '@angular/router';
// import { MatSliderModule } from '@angular/material/slider';
import { TfiQuestionStrings, TfiSectionStrings } from '../common/custom-resource-strings';

@Component({
  selector: 'app-tfi',
  templateUrl: './tfi.component.html',
  styleUrls: ['./tfi.component.css']
})
export class TfiComponent {
  public currentState: number = 0;
  private questions: TfiQuestionStrings = new TfiQuestionStrings();
  private sections: TfiSectionStrings =  new TfiSectionStrings();
  constructor(public router: Router,
              private dataService: TfiDataService) { }

  public moveStateBackward(): void {
    if (this.currentState === 0) {
      return;
    }
    this.dataService.moveStateBackward();
    --this.currentState;
  }
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
