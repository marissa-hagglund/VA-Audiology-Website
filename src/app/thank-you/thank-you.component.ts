import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})

export class ThankYouComponent implements OnInit {

  title = 'Thank you for your cooperation!';

  constructor(private router: Router) {};

  public ngOnInit() {
    console.log('thank you page component')
  }

  OnClickVideoLink(){
    this.router.navigateByUrl('/home');
  }

  OnClickInfoLink(){
    this.router.navigateByUrl('/home');
  }

}
