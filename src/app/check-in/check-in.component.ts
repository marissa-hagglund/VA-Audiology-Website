import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'check-in',
  styleUrls: ['./check-in.component.css'],
  templateUrl: './check-in.component.html',
})

export class CheckInComponent {
   public patientId: string = '';
   constructor(private router: Router) {}
   public onClick(form: NgForm) {
      if (this.patientId.length === 4) {
          console.log('Audiologist log in ' + this.patientId);
      } else if (this.patientId.length === 6) {
        this.router.navigateByUrl('/appointments');
        console.log('log in with ' + this.patientId);
      } else {
        console.log('failed log in ' + this.patientId);
      }
   }
}
