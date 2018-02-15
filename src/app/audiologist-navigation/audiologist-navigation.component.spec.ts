import { AudiologistNavigationComponent } from './audiologist-navigation.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

/*
  Unit tests for the Audiologist Navigation comoponent
*/
fdescribe('AudiologistNavigationComponent', () => {
  let component: AudiologistNavigationComponent;
  let fixture: ComponentFixture<AudiologistNavigationComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ AudiologistNavigationComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(AudiologistNavigationComponent);
    component = fixture.debugElement.componentInstance;

    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
