import { AppointmentsComponent } from './appointments.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Initial Assessment', () => {
  let component: AppointmentsComponent;
  let fixture: ComponentFixture<AppointmentsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
        ],
        providers: [
        ],
        schemas: [NO_ERRORS_SCHEMA],
        declarations: [
          AppointmentsComponent
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentsComponent);
    component = fixture.debugElement.componentInstance;

    fixture.detectChanges();
  });

  it('should test for the on Initial Assessment console output', () => {
    let spy = spyOn(console, 'log');
    component.onInitialAssessment();
    expect(console.log).toHaveBeenCalled();
  });

  it('should test for the on Hearing Aids Fitting console output', () => {
    let spy = spyOn(console, 'log');
    component.onHearingAidsFitting();
    expect(console.log).toHaveBeenCalled();
  });

  it('should test for the on HHearing Aids Evaluation console output', () => {
    let spy = spyOn(console, 'log');
    component.onHearingAidsEvaluation();
    expect(console.log).toHaveBeenCalled();
  });

});
