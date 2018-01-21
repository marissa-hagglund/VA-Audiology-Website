import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThsComponent } from './ths.component';
import { ThsStateflowService } from '../services/ths-stateflow.service';

describe('ThsComponent', () => {
  let component: ThsComponent;
  let fixture: ComponentFixture<ThsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThsComponent ],
      providers: [ ThsStateflowService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
