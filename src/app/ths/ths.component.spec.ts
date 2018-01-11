import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThsComponent } from './ths.component';

describe('ThsComponent', () => {
  let component: ThsComponent;
  let fixture: ComponentFixture<ThsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
