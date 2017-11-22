import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})

export class ThankYouComponent implements OnInit {

  constructor(private router: Router) {};

  public ngOnInit() {
    console.log('thank you page component')
  }

  OnClick(){
    this.router.navigateByUrl('/home');
  }

}
