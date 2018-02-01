import { browser } from 'protractor';
import { HomePage } from './home.po';
import 'tslib';

describe('Home', function() {

  let home: HomePage;

  beforeEach(() => {
    home = new HomePage();
    home.navigateTo();
  });

  /* Protractor was not waiting for the page to fully load
     thus, 'async' and 'await' is used throughtout the test.
  */
  it('Should check title', async function() {
    await expect(home.getPageTitleText()).toEqual('VA Website!');
  });

  it('Should navigate to Patient Login page', async function() {
    await home.getPatientCheckInBtn().click();
    await expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/login');
  });

  // Fail on purpose to show that the test was properly checking elements
  it('Should navigate to Audiologist Login page', async function() {
    await home.getAudiologistLoginBtn().click();
    await expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/FAIL');
  });

});
