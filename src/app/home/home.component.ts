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
    public appState: AppState,
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  public submitState(value: string) {
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
