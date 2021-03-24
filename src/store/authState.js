import { makeAutoObservable } from 'mobx';

class AuthState {
  auth = false;

  constructor() {
    makeAutoObservable(this);
  }

  makeAuthTruthy() {
    this.auth = true;
  }
  makeAuthFalsy() {
    this.auth = false;
  }
}

const authState = new AuthState();
export { authState };
