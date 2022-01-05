import {makeAutoObservable} from 'mobx';

export class Authentication {
  public email: string = '';
  public password: string = '';

  public constructor() {
    makeAutoObservable(this);
  }

  public login(email: string, password: string) {
    if (email && password) {
      this.email = email;
      this.password = password;
      return true;
    }
  }

  public register(email: string, password: string, passwordAgain: string) {
    if (email && password && password === passwordAgain) {
      this.email = email;
      this.password = password;
      return true;
    }
  }

  public resetPassword() {
    // TODO: logic of password reset
  }

  public logout() {
    this.email = '';
    this.password = '';
    // TODO: delete login key
  }
}
