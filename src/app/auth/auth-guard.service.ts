import { Injectable } from '@angular/core';
import { CanLoad, Route, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService) {}

  canLoad(route: Route, ): boolean {
    return this.authService.isAuthenticated();
  }

  canActivate(): boolean {
    return this.authService.isAuthenticated();
  }
}
