import { rolePermissions } from '@constants/rolePermissions';
import { makeAutoObservable } from 'mobx';

class AuthState {
  isAuthenticated = false;
  role = 'Budget Owner';

  constructor() {
    makeAutoObservable(this);
  }

  makeAuthTruthy() {
    this.isAuthenticated = true;
    this.role = 'Admin';
  }
  makeAuthFalsy() {
    this.isAuthenticated = false;
    this.role = '';
  }

  hasPermission(permission) {
    return !permission || rolePermissions[this.role].includes(permission);
  }
}

export const authState = new AuthState();
