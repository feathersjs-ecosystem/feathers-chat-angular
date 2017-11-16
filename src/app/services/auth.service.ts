import { Feathers } from './feathers.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Abstraction layer for auth. Nice to have when things get more complicated.
 */
@Injectable()
export class AuthService {

  constructor(private feathers: Feathers, private router: Router) {}

  public logIn(credentials?): Promise<any> {
    return this.feathers.authenticate(credentials);
  }

  public logOut() {
    this.feathers.logout();
    this.router.navigate(['/']);
  }
}
