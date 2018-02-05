import { browser, by, element } from 'protractor';
import 'tslib';

/*
po means page objects
po.ts is a helper class for getting each elements on the page.
*/
export class HomePage {

  public navigateTo() {
    browser.get('/');
    return element(by.linkText('home'));
  }

  public getPageTitleText() {
    return browser.getTitle();
  }

  public getPatientCheckInBtn() {
    return element(by.buttonText('Patient Check In'));
  }

  public getAudiologistLoginBtn() {
    return element(by.buttonText('Audiologist Log In'));
  }

}
