import { browser, by, element } from 'protractor';
import 'tslib';

describe('Home', function() {

  beforeEach(() => {
    /**
     * Change hash depending on router LocationStrategy.
     */
    // browser.get('/');
  });

  it('should click Patient Check In', async function() {
    browser.get('/home');
    await element(by.buttonText('Patient Check In')).click();
    await expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/login');
  });
  it('should click Audiologist Log In', async function() {
    browser.get('/home');
    await element(by.buttonText('Audiologist Log In')).click();
    await expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/login');
  });

});
