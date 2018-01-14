import { Component, transition } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'check-in',
  styleUrls: ['./check-in.component.css'],
  templateUrl: './check-in.component.html',
})

export class CheckInComponent {
   public patientId: string = '';
   public authenticationFlag: boolean = true;

   constructor(private router: Router) {};

   public onClick() {
      if (this.patientId.length === 6) {
          console.log('Audiologist log in ' + this.patientId);
          this.router.navigateByUrl('/audio-nav');
      } else if (this.patientId.length === 4) {
        this.router.navigateByUrl('/appointments');
        console.log('log in with ' + this.patientId);
      } else {
        this.authenticationFlag = false;
        this.patientId = '';
        console.log('failed log in ' + this.patientId);
      }
   }

   public keyDownFunction(event) {
    if ( event.keyCode === 13) {
      this.onClick();
    } else {
      this.authenticationFlag = true;
    }
  }

  }
