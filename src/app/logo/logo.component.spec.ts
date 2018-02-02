import { LogoComponent } from './logo.component';
import { TestBed, async, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Initial Assessment', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
        ],
        providers: [
        ],
        schemas: [NO_ERRORS_SCHEMA],
        declarations: [
          LogoComponent
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.debugElement.componentInstance;

    fixture.detectChanges();
  });

  it('should test for logo image route to home page', fakeAsync(() => {
    let spy = spyOn(component, 'onClick');
    component.onClick();
    expect(component.onClick).toHaveBeenCalled();
  }));

});
