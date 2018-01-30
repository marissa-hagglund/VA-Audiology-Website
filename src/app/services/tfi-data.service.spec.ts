import { TestBed, async } from '@angular/core/testing';
import { ThsAnswerStrings } from '../../common/custom-resource-strings';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TfiDataService } from './tfi-data.service';

describe('TfiQuestionservice', () => {
  let service: TfiDataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        TfiDataService
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    service = TestBed.get(TfiDataService);
  });
  describe('On creation', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });
  describe ('moveStateBackward', () => {
    it('should have dataRecord to stay the same', () => {
      service.dataRecord = [];
      expect(service.dataRecord.length).toEqual(0);
    });
    it('should pop dataRecord', () => {
      service.dataRecord = [{state: 2, choice: 3}, {state: 2, choice: 2}];
      service.moveStateBackward();
      expect(service.dataRecord[0]).toEqual({state: 2, choice: 3});
    });
  });
  describe('saveData', () => {
    it('should push a dataRecord', () => {
      service.dataRecord = [{state: 2, choice: 2}];
      service.saveData(1, 2);
      expect(service.dataRecord.length).toEqual(2);
    });
  });
});
