import { ActivatedRouteSnapshot } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'audio-navigation',
  styleUrls: ['./audiologist-navigation.component.css'],
  templateUrl: './audiologist-navigation.component.html',
})
/**
 * This function controls the navigation sidebar.
 * Either to show the sidebar or to hide the sidebar.
 * active: boolean is a local variable will be switch between true and false to trigger the function.
 */
export class AudiologistNavigationComponent {
    public active: boolean = true;
    public recommendedTests: boolean = false;
    public suggestedTests: boolean = false;
    public summary: boolean = true;
    public onToggle() {
      if (!this.active) {
          this.active = true;
          console.log('is active');
      } else {
        this.active = false;
        console.log('is active');
      }
    }

    public showRecommendedTests() {
      this.recommendedTests = true;
      this.suggestedTests = false;
      this.summary = false;
    }

    public showSuggestedTests() {
      this.recommendedTests = false;
      this.suggestedTests = true;
      this.summary = false;
    }

    public showSummary() {
      this.recommendedTests = false;
      this.suggestedTests = false;
      this.summary = true;
    }
}
