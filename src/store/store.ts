import React from 'react';
import {configure} from 'mobx';

import {FoodApi} from '../api/foodApi/food-api';
import {HttpApi} from '../api/http-api';
import {Storage} from '../storage/storage';
import {Authentication} from './authentication';
import {Cart} from './cart';
import {FoodStore} from './foodStore';
import {Profile} from './profile';

configure({
  enforceActions: 'never',
});

export class RootStore {
  public authentication: Authentication;
  public foodStore: FoodStore;
  public cart: Cart;
  public profile: Profile;

  private foodApi: FoodApi;
  private storage: Storage;

  public constructor() {
    this.storage = new Storage();
    const httpApi = new HttpApi();
    this.foodApi = new FoodApi(httpApi, this.storage);
    this.authentication = new Authentication(this.foodApi, this.storage);
    this.foodStore = new FoodStore(this.foodApi, this.storage);
    this.cart = new Cart();
    this.profile = new Profile();
  }
}

export const rootStore = new RootStore();

const StoreContext = React.createContext(rootStore);
export const useStore = () => React.useContext(StoreContext);
