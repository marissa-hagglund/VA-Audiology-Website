import { Injectable } from '@angular/core';

// Holds the completed question numbers and their respective answers
@Injectable()
export class TfiDataService {
  public dataRecord: Array <{state: number, choice: number}> = [];
  constructor() { }
  // Push the question number and answer onto the stack
  public saveData(state: number, choice: number): void {
    this.dataRecord.push({state, choice});
    console.log(this.dataRecord);

  }
  // Remove a question number and answer from the stack
  public moveStateBackward(): void {
    this.dataRecord.pop();
    console.log(this.dataRecord);
  }
}
