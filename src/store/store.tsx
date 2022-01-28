import React from 'react';
import {configure} from 'mobx';

import {FoodApi} from '../api/food-api/food-api';
import {HttpApi} from '../api/http-api';
import {Storage} from '../storage/storage';
import {Authentication} from './authentication';
import {Cart} from './cart';
import {FoodStore} from './foodStore';
import {Profile} from './profile';
import {UserApi} from '../api/user-api/userApi';
import {Settings} from './settings';

configure({
  enforceActions: 'never',
});

export class RootStore {
  public authentication: Authentication;
  public foodStore: FoodStore;
  public cart: Cart;
  public profile: Profile;
  public settings: Settings;

  private baseURL: string = 'https://rn-delivery-api.herokuapp.com/api';
  private userApi: UserApi;
  private foodApi: FoodApi;
  private storage: Storage;

  public constructor() {
    this.storage = new Storage();
    const httpApi = new HttpApi();
    httpApi.setBaseURL(this.baseURL);

    this.userApi = new UserApi(httpApi);
    this.foodApi = new FoodApi(httpApi, this.storage);
    this.authentication = new Authentication(this.userApi, this.storage);
    this.foodStore = new FoodStore(this.foodApi, this.userApi, this.storage);
    this.cart = new Cart();
    this.profile = new Profile(this.userApi);
    this.settings = new Settings(this.storage);
  }
}

export const rootStore = new RootStore();

const StoreContext = React.createContext(rootStore);
export const useStore = () => React.useContext(StoreContext);
