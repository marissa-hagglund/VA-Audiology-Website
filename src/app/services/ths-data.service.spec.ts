import { TestBed, inject } from '@angular/core/testing';

import { ThsDataService } from './ths-data.service';

describe('ThsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThsDataService]
    });
  });

  it('should be created', inject([ThsDataService], (service: ThsDataService) => {
    expect(service).toBeTruthy();
  }));
});
