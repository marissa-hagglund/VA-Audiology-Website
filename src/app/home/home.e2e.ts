import { browser, by, element } from 'protractor';
import 'tslib';

describe('Home', () => {

  beforeEach(async () => {
    /**
     * Change hash depending on router LocationStrategy.
     */
    await browser.get('/#/home');
  });

  it('should have a title', async () => {
    let subject = await browser.getTitle();
    let result  = 'VA Website!';
    expect(subject).toEqual(result);
  });

});
