import { Injectable } from '@angular/core';

@Injectable()
export class TfiDataService {
  public dataRecord: Array <{state: number, choice: number}> = [];
  constructor() { }
  public saveData(state: number, choice: number): void {
    this.dataRecord.push({state, choice});
    console.log(this.dataRecord);

  }
  public moveStateBackward(): void {
    this.dataRecord.pop();
    console.log(this.dataRecord);
  }
}
