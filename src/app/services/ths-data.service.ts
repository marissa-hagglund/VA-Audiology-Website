import { Injectable } from '@angular/core';

@Injectable()
export class ThsDataService {
  public history: number[] = [1];
  public dataRecord: Array<{state, choice}> = [];
  public pointRecord: number[] = [0, 0, 0];

  // This function will save the current state and choice the patient made for it in an Array
  // It will also keep a list of the states it has been to previously for going back and tracking progress.
  // Another array will be kept for the subtotals of points for each section
  public saveData(state: number, selection: string): void {
    let initialState = this.history[this.history.length - 1];

    let index: number = this.dataRecord.findIndex((x) => x.state === initialState);
    if (index !== -1) {
      this.dataRecord.splice(index, 1);
    }

    this.dataRecord.push({state: initialState, choice: selection});
    this.history.push(state);

    console.log(this.history);
    console.log(this.dataRecord);

    // Adds up the total points
    // Tinnitus section
    if (state >= 1 && state <= 4) {
        this.pointRecord[0] += +selection[0];
    } else if (state >= 5 && state <= 8) { // Hearing section
        this.pointRecord[1] += +selection[0];
    } else if (state === 9) { // Sound Tolerance section
        this.pointRecord[2] = +selection[0];
    }
  }

  // If it is not the first question in the process, then the record for that previous question will
  // be popped and the previous state returned
  public moveStateBackward(currentState: number): any {
    if (this.history.length <= 1) {
      return null;
    }
    // Tinnitus section
    /* if (state >= 1 && state <= 4) {
        this.pointRecord[0] -= +selection[0];
    } else if (state >= 5 && state <= 8) { // Hearing section
        this.pointRecord[1] -= +selection[0];
    } else if (state === 9) { // Sound Tolerance section
        this.pointRecord[2] = 0;
    } */
    let index: number = this.dataRecord.findIndex((x) => x.state === currentState);
    if (index !== -1) {
      this.dataRecord.splice(index, 1);
    }

    this.history.pop();

    console.log(this.history);
    console.log(this.dataRecord);

    return this.history[this.history.length - 1];
  }

  public populateAnswers(state: number): string {
    let choice = this.dataRecord.find((x) => x.state === state);

    if (choice) {
      return choice.choice;
    } else {
      return '';
    }
  }
}
