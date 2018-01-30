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
    /*  if (no session storage for patient id saved or patient id saved but done) {
            this.router.navigate(['home']);
        } else {
    	      // check current page
    	      // reroute to current page if this is not it
        }*/
    }

    // restrict access to audiologist pages
    if (url === 'audiologist') {
      	/*if (no pin stored) {
      	     this.router.navigate(['check-in']);
      	} else {
      	   // verify somehow (check against static one for now?)
      	}*/
    }
    return true;
  }
}
