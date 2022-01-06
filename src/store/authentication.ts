import {makeAutoObservable} from 'mobx';

export class Authentication {
  public email: string = '';
  public password: string = '';
  public authorized: boolean = false;

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public login(email: string, password: string) {
    if (email === '' && password === '') {
      this.email = email;
      this.password = password;
      this.authorized = true;
    }
  }

  public register(email: string, password: string, passwordAgain: string) {
    if (email === '' && password === '' && password === passwordAgain) {
      this.email = email;
      this.password = password;
      this.authorized = true;
    }
  }

  public resetPassword() {
    // TODO: logic of password reset
  }

  public logout() {
    this.email = '';
    this.password = '';
    this.authorized = false;
  }
}
