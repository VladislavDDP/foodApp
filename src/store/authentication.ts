import {makeAutoObservable} from 'mobx';

import {Repository} from '../api/repository';
import {UserApi} from '../api/user-api/userApi';
import {Configs} from '../config/configs';
import {User} from '../model/user';
import {Storage} from '../storage/storage';
import {injector} from '../utils/injector/Injector';

export class AuthenticationStore {
  private userApi: UserApi = injector.get<UserApi>(Repository.userApi);
  private storage: Storage = injector.get<Storage>(Configs.AsyncMemory);

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public get authorized() {
    return !!this.userApi.user?.id;
  }

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
    this.userApi.logoutUser();
    await this.storage.removeAuthenticationData();
    await this.storage.removeUserData();
    this.userApi.removeUserToken();
  };

  private defaultAuthenticationSetUp = async (jwt: string, email: string, password: string, user: User) => {
    this.userApi.setUserToken(jwt);
    await this.storage.addAuthenticationData(email, password);
    await this.storage.addUserData(user);
  };
}
