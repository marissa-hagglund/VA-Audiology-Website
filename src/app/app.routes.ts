// tslint:disable-next-line:max-line-length
import { AudiologistNavigationComponent } from './audiologist-navigation/audiologist-navigation.component';
import { CheckInComponent } from './check-in/check-in.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login', component: CheckInComponent},
  { path: 'audio-nav', component: AudiologistNavigationComponent},
  { path: '**',    component: NoContentComponent },
];
