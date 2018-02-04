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
    element(by.buttonText('Initial Assessment')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/ts');
  });
  it('should click Hearing Aids Fitting', async function() {
    element(by.buttonText('Hearing Aids Fitting')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/ts');
  });
  it('should click Hearing Aids Follow-Up Visit', async function() {
    element(by.buttonText('Hearing Aid Follow-Up Visit')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/ts');
  });
  it('should click home page', async function() {
    element(by.css('[class="logo"]')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/home');
  });

});
