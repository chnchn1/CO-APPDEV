import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated = false;
  constructor() { }
  canActivate() {
    return this.isAuthenticated
  }
}
