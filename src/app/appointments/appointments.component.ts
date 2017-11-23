import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component ({
  selector: 'appointments',
  styleUrls: ['./appointments.component.css'],
  templateUrl: './appointments.component.html'
})

export class AppointmentsComponent {
  public onInitialAssessment() {
    console.log('Initial Assessment');
  }
  public onHearingAidsFitting() {
    console.log('Hearing Aids Fitting');
  }
  public onHearingAidsEvaluation() {
    console.log('Hearing Aids Evaluation');
  }
}
