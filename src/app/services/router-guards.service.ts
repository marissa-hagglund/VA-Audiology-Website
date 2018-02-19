import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
// import { SecurityService } from './security.service';

@Injectable()
export class RouterGuards implements CanActivate {

  constructor(
    public router: Router,
    // public securityService: SecurityService
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;

    // must always start at the home page or pick up where left off if the url is one of these
    if (url === 'appointments' || url === 'ts' || url === 'ths' || url === 'tfi' || url === 'thank-you') {
      let id = sessionStorage.getItem('patientId');

      // if there is not an ID saved, a patient hasn't started so it routes back to home
      // COMMENTED OUT BECAUSE RELIES ON SESSION STORAGE WHICH WE DO NOT HAVE YET
      /* if (!id) {
            this.router.navigateByUrl('home');
      } */
    }

    // restrict access to audiologist pages
    if (url === 'audiologist') {
      let pin = sessionStorage.getItem('audiologist-pin');
      // if there isn't a pin, then they obviously have not logged in yet
    	if (!pin) {
    	   this.router.navigateByUrl('check-in');
    	} else {
    	   // verify against static - navigate to check in if it's incorrect
         // This can be replaced in the future with a request to verify against DB
         if (pin !== '123456') {
           this.router.navigateByUrl('check-in');
         } else {
           return true;
         }
    	}
    }
    return true;
  }
}
