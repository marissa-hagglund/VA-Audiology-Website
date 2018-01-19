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
  private questions: TfiQuestionStrings = new TfiQuestionStrings();
  private sections: TfiSectionStrings =  new TfiSectionStrings();
  private currentState: number = 0;
  constructor(private router: Router,
              private dataService: TfiDataService) { }
  
  private moveStateBackward(): void {
    if (this.currentState === 0) {
      return;
    }
    this.dataService.moveStateBackward();
    --this.currentState;
  }
  private moveStateForward(choice: number): void {
    if (!choice) {
      return;
    }
    this.dataService.saveData(this.currentState, choice);
    if (this.currentState === 24) {
      this.router.navigateByUrl('/thank-you');
    }
    ++this.currentState;
  }

}
