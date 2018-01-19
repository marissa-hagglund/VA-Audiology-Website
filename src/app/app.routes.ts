// tslint:disable-next-line:max-line-length
import { AudiologistNavigationComponent } from './audiologist-navigation/audiologist-navigation.component';
import { CheckInComponent } from './check-in/check-in.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { ThankYouComponent } from './thank-you/thank-you.component';

import { DataResolver } from './app.resolver';
import { TsScreenerComponent } from './ts-screener/ts-screener.component';
import {TfiComponent} from "./tfi/tfi.component";

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login', component: CheckInComponent},
  { path: 'appointments', component: AppointmentsComponent},
  { path: 'audio-nav', component: AudiologistNavigationComponent},
  { path: 'thank-you', component: ThankYouComponent},
  { path: 'ts-screener', component: TsScreenerComponent},
  { path: 'app-tfi', component: TfiComponent },
  { path: '**',    component: NoContentComponent },
];
