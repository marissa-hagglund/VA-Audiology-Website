import { Injectable } from '@angular/core';

@Injectable()
export class ThsDataService {
  public history: number[] = [1];
  public dataRecord: Array<{state, choice}> = [];

  public onInit() {
    console.log('INIT', sessionStorage);
    if (JSON.parse(sessionStorage.getItem('ths-dataRecord'))) {
      this.dataRecord = JSON.parse(sessionStorage.getItem('ths-dataRecord'));
    }
    if (JSON.parse(sessionStorage.getItem('ths-history'))) {
      this.history = JSON.parse(sessionStorage.getItem('ths-history'));
    }
  }
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

    this.updateSessionStorage();
    console.log(sessionStorage);

    console.log(this.history);
    console.log(this.dataRecord);
  }

  // If it is not the first question in the process, then the record for that previous question will
  // be popped and the previous state returned
  public moveStateBackward(currentState: number): any {
    if (this.history.length <= 1) {
      return null;
    }

    let index: number = this.dataRecord.findIndex((x) => x.state === currentState);
    if (index !== -1) {
      this.dataRecord.splice(index, 1);
    }

    this.history.pop();

    this.updateSessionStorage();

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

  public updateSessionStorage(): void {
    sessionStorage.setItem('ths-dataRecord', JSON.stringify(this.dataRecord));
    sessionStorage.setItem('ths-history', JSON.stringify(this.history));
  }
}
