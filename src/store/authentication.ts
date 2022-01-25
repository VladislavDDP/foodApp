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
    const response = await this.storage.getAuthData();
    if (response) {
      await this.login(response.email, response.password);
    }
    return true;
  };

  public login = async (email: string, password: string) => {
    const response = await this.userApi.authorizeUser(email, password);
    await this.defaultAuthenticationSetUp(response.jwt, email, password, response.user);
    return true;
  };

  public register = async (email: string, username: string, password: string) => {
    const response = await this.userApi.registerUser(email, username, password);
    await this.defaultAuthenticationSetUp(response.jwt, email, password, response.user);
    return true;
  };

  public resetPassword = () => {
    // TODO: logic of password reset
  };

  public logout = async () => {
    this.authorized = false;
    this.userApi.logoutUser();
    await this.storage.removeAuthenticationData();
    await this.storage.removeUserData();
    this.userApi.removeUserToken();
  };

  private defaultAuthenticationSetUp = async (jwt: string, email: string, password: string, user: User) => {
    this.userApi.setUserToken(jwt);
    await this.storage.addAuthenticationData(email, password);
    await this.storage.addUserData(user);
    this.authorized = true;
  };
}
