import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'otoscopy',
  styleUrls: ['./otoscopy.component.css'],
  template: `
  <h3 style="color: gray" align="center">Otoscopy</h3>
  <h2 styple="color: black" align="left">Type</h2>
  <mat-radio-button value="{{normal}}">{{normal}}</mat-radio-button> <br>
  <mat-radio-button value="{{notNormal}}">{{notNormal}}</mat-radio-button> <br>
  `
})
export class OtoscopyComponent implements OnInit {

  /*
   * Data members for otoscopy radio buttons
   */
  public normal: string = "Normal"
  public notNormal: string = "Not Normal"

  constructor() { }

  ngOnInit() {
  }

}
