import { browser, by, element } from 'protractor';
import 'tslib';

/*
po means page objects
po.ts is a helper class for getting each elements on the page.
*/
export class HomePage {

  navigateTo() {
    return browser.get('/');
  }

  getPageTitleText() {
    return browser.getTitle();
  }

  getPatientCheckInBtn() {
    return element(by.buttonText('Patient Check In'));
  }

  getAudiologistLoginBtn() {
    return element(by.buttonText('Audiologist Log In'));
  }

}
