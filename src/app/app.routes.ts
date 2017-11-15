import { PatientCheckInComponent } from './patient-check-in/patient-check-in.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login', component: PatientCheckInComponent},
  { path: '**',    component: NoContentComponent },
];
