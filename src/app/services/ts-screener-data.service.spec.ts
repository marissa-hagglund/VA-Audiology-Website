import { TestBed } from '@angular/core/testing';
import { ThsAnswerStrings } from '../../common/custom-resource-strings';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TsScreenerDataService } from './ts-screener-data.service';

describe('TsScreenerDataService', () => {
  let service: TsScreenerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        TsScreenerDataService
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    service = TestBed.get(TsScreenerDataService);
  });

  describe('On creation', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('moveStateBackward', () => {
    it('should return null', () => {
      service.history = [];
      expect(service.moveStateBackward(1)).toEqual(null);
    });

    it('should pop history', () => {
      service.history = [1, 2];
      service.moveStateBackward(4);
      expect(service.history[0]).toEqual(1);
    });

    it('should print on the console', () => {
      service.history = [1, 2];
      let spy = spyOn(console, 'log');
      service.moveStateBackward(4);
      expect(spy).toHaveBeenCalled();
    });

    it('should return 1', () => {
      service.history = [1, 2];
      expect(service.moveStateBackward(4)).toEqual(1);
    });
  });

  describe('saveData', () => {
    it('should print on the console', () => {
      let spy = spyOn(console, 'log');
      service.saveData(1, 'test');
      expect(spy).toHaveBeenCalled();
    });

    it('should push a data record', () => {
      service.history = [1];
      service.saveData(2, 'test');
      expect(service.dataRecord.length).toEqual(1);
      expect(service.dataRecord[0].state).toEqual(1);
    });

    it('should push a history record', () => {
      service.history = [1];
      service.saveData(2, 'test');
      expect(service.history[1]).toEqual(2);
    });
  });
});
