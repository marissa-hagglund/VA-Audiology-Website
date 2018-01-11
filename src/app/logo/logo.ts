import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'logo',
  template: `
      <div class="row">
        <div class="col-md-4">
           <img  (click)="onClick()" class="logo" [src]="imgLink" />
        </div>
      </div>
  `,
  styleUrls: ['./logo.component.css']
})

export class LogoComponent {
    public imgLink = 'assets/images/logo.png';

    constructor(private router: Router) {}
    public onClick() {
        this.router.navigateByUrl('/home');
        console.log('back to home page.');
    }
}
