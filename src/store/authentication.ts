import {makeAutoObservable} from 'mobx';

import {FoodApi} from '../api/foodApi/food-api';
import {Storage} from '../storage/storage';

export class Authentication {
  public email: string = '';
  public authorized: boolean = false;

  private foodApi: FoodApi;
  private storage: Storage;

  public constructor(foodApi: FoodApi, storage: Storage) {
    this.foodApi = foodApi;
    this.storage = storage;
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public async checkIfAuthorized() {
    const key = await this.storage.getToken();
    if (key) {
      this.authorized = true;
    }
  }

  public async login(email: string, password: string) {
    const response = await this.foodApi.authorizeUser(email, password);
    this.email = response.user.email;
    this.authorized = true;
    this.storage.addAuthenticationKey(response.jwt);
    return true;
  }

  public register(email: string, password: string, passwordAgain: string) {
    if (email === 'email@gmail.com' && password === '1' && password === passwordAgain) {
      this.email = email;
      this.authorized = true;
      return true;
    }
  }

  public resetPassword() {
    // TODO: logic of password reset
  }

  public logout() {
    this.email = '';
    this.authorized = false;
    this.storage.removeAuthenticationKey();
  }
}
