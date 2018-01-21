import { Router } from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'home',  // <home></home>
  providers: [
  ],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  public localState = { value: '' };
  constructor(
    public appState: AppState, private router: Router
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  public patientOnClick() {
    this.router.navigateByUrl('/login');
    console.log('patient button to log in');
  }
}
