import { Injectable } from '@angular/core';

@Injectable()
export class ThsDataService {
  private history: Array<number> = [1];
  private dataRecord: Array<{state, choice}> = [];

  constructor() { }

  public saveData(state: number, choice: string): void {
    this.dataRecord.push({state: this.history[this.history.length-1], choice: choice});
    this.history.push(state);
    console.log(this.history);
    console.log(this.dataRecord);
  }

  public moveStateBackward(): number {
    if(this.history.length <= 1) {
      return null;
    }

    this.history.pop();
    this.dataRecord.pop();

    console.log(this.history);
    console.log(this.dataRecord);

    return this.history[this.history.length-1];
  }
}
