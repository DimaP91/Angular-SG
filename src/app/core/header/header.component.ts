import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import M from 'materialize-css';

import { AuthService } from '../../auth/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, DoCheck {
  auth = false;

  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
    this.auth = this.authService.isAuthenticated();
  }

  ngDoCheck() {
    this.auth = this.authService.isAuthenticated();
  }

  onSignIn() {
    this.authService.signin();
  }

  onSignOut() {
    this.authService.signout();
    this.router.navigateByUrl('');
  }

  isAuth() {
    return !this.auth && M.toast({html: 'You are not Authenticated!<br>Please Sign in first.'});
  }
}
