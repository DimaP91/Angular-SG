import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private cookieService: CookieService) {}

  signin() {
    this.cookieService.set('auth', 'true');
  }

  signout() {
    this.cookieService.delete('auth');
  }

  isAuthenticated(): boolean {
    return this.cookieService.check('auth');
  }
}
