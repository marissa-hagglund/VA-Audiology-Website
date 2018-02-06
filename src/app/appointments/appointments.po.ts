import { browser, by, element } from 'protractor';
import 'tslib';

/*
po means page objects
po.ts is a helper class for getting each elements on the page.
*/
export class AppointmentsPage {

  public navigateTo() {
    browser.get('/');
    return element(by.linkText('appointments'));
  }
  public getUrl() {
    return browser.getCurrentUrl();
  }
  public getInitialAssessment() {
    return element(by.buttonText('Initial Assessment'));
  }
  public getHearingAidsFitting() {
    return element(by.buttonText('Hearing Aids Fitting'));
  }
  public getHearingAidsFollowUp() {
    return element(by.buttonText('Hearing Aid Follow-Up Visit'));
  }

}
