import { browser, by, element } from 'protractor';
import 'tslib';

describe('Appointments', function() {

  beforeEach(() => {
    /**
     * Change hash depending on router LocationStrategy.
     */
    // browser.get('/');
    browser.get('/');
    element(by.linkText('appointments'));
  });

  it('should click Initial Assessment', async function() {
    await element(by.buttonText('Initial Assessment')).click();
    await expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/ts');
  });
  it('should click Hearing Aids Fitting', async function() {
    await element(by.buttonText('Hearing Aids Fitting')).click();
    await expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/ts');
  });
  it('should click Hearing Aids Follow-Up Visit', async function() {
    await element(by.buttonText('Hearing Aid Follow-Up Visit')).click();
    await expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/ts');
  });
  it('should click home page', async function() {
    await element(by.css('[class="logo"]')).click();
    await expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/home');
  });

});
