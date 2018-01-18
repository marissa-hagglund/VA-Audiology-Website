import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'logo',
  template: `
      <div>
        <img  (click)="onClick()" class="logo" [src]="imgLink" alt="Logo"/>
      </div>
  `,
  styleUrls: ['./logo.component.css']
})

export class LogoComponent {
    @Input() public logoRouteOption: string;
    @Input()public imgLink = 'assets/images/logo.png';
    /*
      #1 - route to "home page"
      #2 - display logo image with "HOME" text
    */
    constructor(private router: Router) {
    }

    public onClick() {
      if (this.logoRouteOption === '1') {
        this.router.navigateByUrl('/home');
        console.log('back to home page.');
      }
      if (this.logoRouteOption === '2') {
          console.log('stay put');
      }
    }
// tslint:disable-next-line:eofline
}
