import { CheckInComponent } from './check-in/check-in.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login', component: CheckInComponent},
  { path: 'appointments', component: AppointmentsComponent},
  { path: '**',    component: NoContentComponent },
];
