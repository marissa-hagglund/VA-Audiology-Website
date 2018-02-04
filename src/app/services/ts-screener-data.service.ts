import { Injectable } from '@angular/core';

@Injectable()
export class TsScreenerDataService {
  public history: number[] = [1];
  public dataRecord: Array<{state, choice}> = [];

  constructor() { }

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
  }

  public moveStateBackward(currentState: number): any {
    if (this.history.length <= 1) {
      return null;
    }

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
