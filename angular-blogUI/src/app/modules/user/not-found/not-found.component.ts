import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appSettings } from 'src/app/config/app-settings.config';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  appSettings = appSettings;
  constructor(
   // private authenticationService: AuthenticationService,
    private router: Router,
   ) {
  }

  goToHome() {
   // const userType = this.authenticationService.getUserType();
   const userType="";
    if ( !userType ) {
      this.router.navigate(['/auth/login']);
    } else if (userType === 'client') {
      this.router.navigate(['/client/dashboard']);
    }
  }
}