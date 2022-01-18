import {makeAutoObservable} from 'mobx';

import {UserApi} from '../api/user-api/userApi';
import {Storage} from '../storage/storage';

export class Authentication {
  public email: string = '';
  public authorized: boolean = false;

  private userApi: UserApi;
  private storage: Storage;

  public constructor(userApi: UserApi, storage: Storage) {
    this.userApi = userApi;
    this.storage = storage;
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public async checkIfAuthorized() {
    const key = await this.storage.getToken();
    if (key) {
      this.userApi.setUserToken(key);
      this.authorized = true;
    }
  }

  public async login(email: string, password: string) {
    const response = await this.userApi.authorizeUser(email, password);
    this.userApi.setUserToken(response.jwt);
    this.storage.addAuthenticationKey(response.jwt);
    this.email = response.user.email;
    this.authorized = true;
    return true;
  }

  public register(email: string) {
    this.email = email;
    this.authorized = true;
    return true;
  }

  public resetPassword() {
    // TODO: logic of password reset
  }

  public async logout() {
    this.email = '';
    this.authorized = false;
    await this.storage.removeAuthenticationKey();
    this.userApi.removeUserToken();
  }
}
