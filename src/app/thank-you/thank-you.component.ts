import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})

export class ThankYouComponent implements OnInit {

  private title = 'Thank you for your cooperation!';

  constructor(private router: Router) {};

  public ngOnInit() {
    console.log('thank you page component');
  }

  private OnClickVideoLink() {
    this.router.navigateByUrl('/home');
  }

  private OnClickInfoLink() {
    this.router.navigateByUrl('/home');
  }

}
