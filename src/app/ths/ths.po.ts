import { browser, by, element } from 'protractor';
import 'tslib';

/*
  Helper class for accessing elements on THS page
*/
export class ThsPage {

  navigateTo() {
    return browser.get('/ths');
  }

  getTitleText() {
    return element(by.xpath('//html/body/app/main/app-ths/h3')).getText();
  }

  getQuestionText() {
    return element(by.xpath('//html/body/app/main/app-ths/ths-question/h2')).getText();
  }

  getAnswer(choice:number) {
    // radio button for answer starts at 2. first choice is  mat-radio-2
    // var real = choice+2;
    var xPath = '//html/body/app/main/app-ths/ths-question/div[1]/div/div/mat-radio-group';
    var radio = element(by.xpath(xPath)).all(by.id('mat-radio-4')).get(0);
    return radio;
  }

  // return 5 for now
  getNumberOfChoices() {
    return 5;
  }

  getBackButton() {
    return element(by.buttonText('BACK'));
  }

  getNextButton() {
    return element(by.buttonText('NEXT'));
  }

}
