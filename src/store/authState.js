import { rolePermissions } from '@constants/rolePermissions';
import { makeAutoObservable } from 'mobx';

import * as roles from '@constants/roles';

class AuthState {
  authToken = '';
  isAuthenticated = false;
  role = '';

  constructor() {
    makeAutoObservable(this);
  }

  login(token) {
    this.authToken = token;
    this.isAuthenticated = true;
    this.role = roles.admin;
  }

  logout() {
    this.authToken = '';
    this.isAuthenticated = false;
    this.role = '';
  }

  hasPermission(permission) {
    return !permission || rolePermissions[this.role].includes(permission);
  }
}

export const authState = new AuthState();
