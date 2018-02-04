import { browser, by, element } from 'protractor';
import 'tslib';

/*
po means page objects
po.ts is a helper class for getting each elements on the page.
*/
export class LoginPage {

  public navigateTo() {
    browser.get('/');
    return element(by.linkText('login'));
  }
  public getUrl() {
    return browser.getCurrentUrl();
  }
  public getTextBox() {
    return element(by.css('[placeholder="Usercode"]'));
  }

  public getSignInBtn() {
    return element(by.buttonText('Log In'));
  }

}
