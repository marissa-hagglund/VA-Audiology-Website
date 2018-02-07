import { TestBed, async } from '@angular/core/testing';
import { ThsAnswerStrings } from '../../common/custom-resource-strings';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ThsStateflowService } from './ths-stateflow.service';
import { ThsDataService } from './ths-data.service';
import { TsScreenerStateflowService } from './ts-screener-stateflow.service';
import { TsScreenerDataService } from './ts-screener-data.service';

describe('TsScreenerStateflowService', () => {
  let service: TsScreenerStateflowService;
  let dataService: TsScreenerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        TsScreenerStateflowService,
        TsScreenerDataService
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    service = TestBed.get(TsScreenerStateflowService);
    dataService = TestBed.get(TsScreenerDataService);
  });

  describe('On creation', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('moveStateBackward', () => {
    it('should return integer', () => {
      let spy = spyOn(dataService, 'moveStateBackward').and.returnValue(5);
      expect(service.moveStateBackward(7)).toEqual(5);
    });
  });

  describe('moveStateForward', () => {
    it('should return 10', () => {
      let spy = spyOn(dataService, 'saveData').and.returnValue(5);
      expect(service.moveStateForward(3, '1 - hello')).toEqual(7);
    });

    it('should return 11', () => {
      let spy = spyOn(dataService, 'saveData').and.returnValue(5);
      expect(service.moveStateForward(4, 'NO')).toEqual(6);
    });

    it('should return incremented', () => {
      let spy = spyOn(dataService, 'saveData').and.returnValue(5);
      expect(service.moveStateForward(6, 'hello')).toEqual(7);
    });
  });
});
