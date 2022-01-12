import React from 'react';

import {FoodApi} from '../api/foodApi/food-api';
import {HttpApi} from '../api/http-api';
import {Storage} from '../storage/storage';
import {Authentication} from './authentication';
import {Cart} from './cart';
import {FoodStore} from './foodStore';

export class RootStore {
  public authentication: Authentication;
  public foodStore: FoodStore;
  public cart: Cart;

  public foodApi: FoodApi;
  public storage: Storage;

  public constructor() {
    const httpApi = new HttpApi();
    this.foodApi = new FoodApi(httpApi);
    this.storage = new Storage();

    this.authentication = new Authentication();
    this.foodStore = new FoodStore(this.foodApi, this.storage);
    this.cart = new Cart();
  }
}

export const rootStore = new RootStore();

const StoreContext = React.createContext(rootStore);
export const useStore = () => React.useContext(StoreContext);
