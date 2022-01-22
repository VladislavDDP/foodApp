import {makeAutoObservable} from 'mobx';

import {UserApi} from '../api/user-api/userApi';
import {User} from '../model/user';
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

  public checkIfAuthorized = async () => {
    const key = await this.storage.getToken();
    if (key) {
      const user = await this.storage.getUserData();
      this.userApi.setUser(user);
      this.userApi.setUserToken(key);
      this.authorized = true;
      return true;
    } else {
      this.authorized = false;
      return false;
    }
  };

  public login = async (email: string, password: string) => {
    const response = await this.userApi.authorizeUser(email, password);
    this.defaultAuthenticationSetUp(response.jwt, response.user);
    return true;
  };

  public register = async (email: string, username: string, password: string) => {
    const response = await this.userApi.registerUser(email, username, password);
    this.defaultAuthenticationSetUp(response.jwt, response.user);
    return true;
  };

  public resetPassword = () => {
    // TODO: logic of password reset
  };

  public logout = async () => {
    this.authorized = false;
    this.userApi.logoutUser();
    await this.storage.removeAuthenticationKey();
    await this.storage.removeUserData();
    this.userApi.removeUserToken();
  };

  private defaultAuthenticationSetUp = async (jwt: string, user: User) => {
    this.userApi.setUserToken(jwt);
    await this.storage.addAuthenticationKey(jwt);
    await this.storage.addUserData(user);
    this.authorized = true;
  };
}
