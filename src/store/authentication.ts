import {makeAutoObservable} from 'mobx';

import {UserApi} from '../api/user-api/userApi';
import {Storage} from '../storage/storage';

export class Authentication {
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
      const user = await this.storage.getUserData();
      this.userApi.setUser(user);
      this.userApi.setUserToken(key);
      this.authorized = true;
    }
  }

  public async login(email: string, password: string) {
    const response = await this.userApi.authorizeUser(email, password);
    this.userApi.setUserToken(response.jwt);
    this.storage.addAuthenticationKey(response.jwt);
    this.storage.addUserData(response.user);
    this.userApi.setUser(response.user);
    this.authorized = true;
    return true;
  }

  public register(email: string) {
    // TODO: add user data to profile
    this.authorized = true;
    return true;
  }

  public resetPassword() {
    // TODO: logic of password reset
  }

  public async logout() {
    this.authorized = false;
    this.userApi.logoutUser();
    await this.storage.removeAuthenticationKey();
    await this.storage.removeUserData();
    this.userApi.removeUserToken();
  }
}
