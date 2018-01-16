import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsScreenerComponent } from './ts-screener.component';
import { TsScreenerStateflowService } from '../services/ts-screener-stateflow.service';
import { TsScreenerDataService } from '../services/ts-screener-data.service';

describe('TsScreenerComponent', () => {
  let component: TsScreenerComponent;
  let fixture: ComponentFixture<TsScreenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsScreenerComponent ],
      providers: [
        TsScreenerStateflowService,
        TsScreenerDataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsScreenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
