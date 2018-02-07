import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tympanometry',
  styleUrls: ['./tympanometry.component.css'],
  template: `
  <h3 style="color: gray" align="center">Tympanometry</h3>
  <h2 styple="color: black" align="left">Type</h2>
  <mat-radio-group>
  <mat-radio-button value="{{choiceOne}}">{{choiceOne}}</mat-radio-button> <br>
  <mat-radio-button value="{{choiceTwo}}">{{choiceTwo}}</mat-radio-button> <br>
  <mat-radio-button value="{{choiceThree}}">{{choiceThree}}</mat-radio-button> <br>
  </mat-radio-group>
  `
})
export class TympanometryComponent implements OnInit {

  /*
   * Data members for tympanometry radio buttons
   */
  public choiceOne: string = "Choice 1"
  public choiceTwo: string = "Choice 2"
  public choiceThree: string = "Choice 3"
  constructor() { }

  ngOnInit() {
  }

}
