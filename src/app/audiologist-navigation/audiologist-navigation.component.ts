import { ActivatedRouteSnapshot } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'audio-navigation',
  styleUrls: ['./audiologist-navigation.component.css'],
  templateUrl: './audiologist-navigation.component.html',
})

export class AudiologistNavigationComponent {
    public active: boolean = true;
    public onClick() {
      if (this.active) {
          this.active = false;
      } else {
        this.active = true;
      }
    }
}
