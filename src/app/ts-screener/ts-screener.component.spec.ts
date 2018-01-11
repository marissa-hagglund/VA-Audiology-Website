import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsScreenerComponent } from './ts-screener.component';

describe('TsScreenerComponent', () => {
  let component: TsScreenerComponent;
  let fixture: ComponentFixture<TsScreenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsScreenerComponent ]
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
