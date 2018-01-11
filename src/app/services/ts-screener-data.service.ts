import { Injectable } from '@angular/core';

@Injectable()
export class TsScreenerDataService {
  private history: Array<number> = [1];
  private dataRecord: Array<[number, string]> = [];

  constructor() { }

  public saveData(state: number, choice: string): void {
    this.dataRecord.push([this.history[this.history.length-1], choice]);
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

    return this.history[this.history.length-1];
  }
}
