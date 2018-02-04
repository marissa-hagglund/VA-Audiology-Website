import { browser, by, element } from 'protractor';
import 'tslib';

describe('Login', function() {

  beforeEach(() => {
    /**
     * Change hash depending on router LocationStrategy.
     */
    // let textBox = element(by.name('Username'));
    browser.get('/');
    element(by.linkText('login'));
  });

  it('should login as patient', async function() {
    element(by.css('[placeholder="Usercode"]')).sendKeys('4444');
    element(by.buttonText('Log In')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/appointments');
  });
  it('should login as audiologist', async function() {
    element(by.css('[placeholder="Usercode"]')).sendKeys('994444');
    element(by.buttonText('Log In')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/audiologist');
  });
  it('return to home page', async function() {
    element(by.css('[class="logo"]')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/home');
  });
  it('should not login', async function() {
    element(by.css('[placeholder="Usercode"]')).sendKeys('9948444');
    element(by.buttonText('Log In')).click();
    element(by.css('[class="failLogIn"]')).isDisplayed();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/login');
  });
});
