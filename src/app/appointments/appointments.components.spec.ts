import { AppointmentsComponent } from './appointments.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
// tslint:disable-next-line:whitespace
import { RouterModule, Router, Routes } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('Initial Assessment', () => {
  let component: AppointmentsComponent;
  let fixture: ComponentFixture<AppointmentsComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    TestBed.configureTestingModule({
        imports: [
        RouterTestingModule
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

    router = TestBed.get(Router);
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should test for the on Initial Assessment console output', () => {
    let spy = spyOn(console, 'log');
    component.onInitialAssessment();
    expect(console.log).toHaveBeenCalled();

    spy = spyOn(router, 'navigateByUrl');
    component.onInitialAssessment();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/ts');
  });

  it('should test for the on Hearing Aids Fitting console output', () => {
    let spy = spyOn(console, 'log');
    component.onHearingAidsFitting();
    expect(console.log).toHaveBeenCalled();

    spy = spyOn(router, 'navigateByUrl');
    component.onHearingAidsFitting();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/ts');
  });

  it('should test for the on HHearing Aids Evaluation console output', () => {
    let spy = spyOn(console, 'log');
    component.onHearingAidsEvaluation();
    expect(console.log).toHaveBeenCalled();

    spy = spyOn(router, 'navigateByUrl');
    component.onHearingAidsEvaluation();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/ts');

  });

});
