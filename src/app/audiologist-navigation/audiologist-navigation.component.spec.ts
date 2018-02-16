import { AudiologistNavigationComponent } from './audiologist-navigation.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

/*
  Unit tests for the Audiologist Navigation comoponent
*/
fdescribe('Audiologist Navigation', () => {
  let component: AudiologistNavigationComponent;
  let fixture: ComponentFixture<AudiologistNavigationComponent>;
  let router: Router;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ AudiologistNavigationComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(AudiologistNavigationComponent);
    component = fixture.debugElement.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
    router.initialNavigation();

  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should test for audiologist nav bar toggle console output', () => {
    let spy = spyOn(console, 'log');
    component.onToggle();
    expect(console.log).toHaveBeenCalled();
  });

  fit('should test for audiologist default visibility', () => {
    expect(component.summary).toBe(true);
  });

  fit('should test for audiologist nav bar onToggle', () => {
    component.onToggle();
    expect(component.active).toBe(false);
  });

  fit('should test for audiologist showRecommendedTests', () => {
    component.showRecommendedTests();
    expect(component.recommendedTests).toBe(true);
  });

  fit('should test for audiologist showSuggestedTests', () => {
    component.showSuggestedTests();
    expect(component.suggestedTests).toBe(true);
  });

  fit('should test for audiologist showSummary', () => {
    component.showSummary();
    expect(component.summary).toBe(true);
  });

});
