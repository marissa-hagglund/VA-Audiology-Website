import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component ({
  selector: 'appointments',
  styleUrls: ['./appointments.component.css'],
  templateUrl: './appointments.component.html'
})

export class AppointmentsComponent {

  constructor(private router: Router) {};

  public onInitialAssessment() {
    console.log('Initial Assessment');
    this.router.navigateByUrl('/ts-screener');
  }
  public onHearingAidsFitting() {
    console.log('Hearing Aids Fitting');
    this.router.navigateByUrl('/ts-screener');
  }
  public onHearingAidsEvaluation() {
    console.log('Hearing Aids Evaluation');
    this.router.navigateByUrl('/ts-screener');
  }
}
