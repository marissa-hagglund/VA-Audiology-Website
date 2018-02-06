import { Injectable } from '@angular/core';

@Injectable()
export class ThsDataService {
  public history: number[] = [1];
  public dataRecord: Array<{state, choice}> = [];

  // This function will save the current state and choice the patient made for it in an Array
  // It will also keep a list of the states it has been to previously for going back and tracking progress.
  // Another array will be kept for the subtotals of points for each section
  public saveData(state: number, selection: string): void {
    this.dataRecord.push({state: this.history[this.history.length - 1], choice: selection});
    this.history.push(state);
    console.log(this.history);
    console.log(this.dataRecord);

  // If it is not the first question in the process, then the record for that previous question will
  // be popped and the previous state returned
  public moveStateBackward(): number {
    if (this.history.length <= 1) {
      return null;
    }

    this.history.pop();
    this.dataRecord.pop();

    console.log(this.history);
    console.log(this.dataRecord);

    return this.history[this.history.length - 1];
  }
}
