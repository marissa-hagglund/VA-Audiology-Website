import { browser, by, element } from 'protractor';
import 'tslib';

describe('Login', function() {

  beforeEach(() => {
    /**
     * Change hash depending on router LocationStrategy.
     */
    // let textBox = element(by.name('Username'));
  });

  it('should login as patient', async function() {
    browser.get('/login');
    await element(by.css('[placeholder="Usercode"]')).sendKeys('4444');
    await element(by.buttonText('Log In')).click();
    await expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/appointments');
  });
  it('should login as audiologist', async function() {
    browser.get('/login');
    await element(by.css('[placeholder="Usercode"]')).sendKeys('994444');
    await element(by.buttonText('Log In')).click();
    await expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/audio-nav');
  });
  it('return to home page', async function() {
    browser.get('/login');
    await element(by.css('[class="logo"]')).click();
    await expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/home');
  });
  it('should not login', async function() {
    browser.get('/login');
    await element(by.css('[placeholder="Usercode"]')).sendKeys('9948444');
    await element(by.buttonText('Log In')).click();
    await element(by.css('[class="failLogIn"]')).isDisplayed();
    await expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/login');
  });
});
