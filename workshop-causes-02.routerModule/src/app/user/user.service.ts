import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: any;

  get isLogged() {
    return !!this.currentUser;
  }

  constructor() {
    this.currentUser = localStorage.getItem('currentUser') || false;
  }

  login(username: string, password: string) {
    localStorage.setItem('currentUser', username);
    this.currentUser = username;
  }

  register() {

  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }
}
