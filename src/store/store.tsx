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
import {injector} from '../utils/injector/Injector';
import {Config} from '../config/config';
import {Service} from '../api/service';

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

  public constructor() {
    injector.set(Config.Http, new HttpApi(this.baseURL));
    injector.set(Config.AsyncMemory, new Storage());
    injector.set(Service.userApi, new UserApi());
    injector.set(Service.foodApi, new FoodApi());

    this.authentication = new Authentication();
    this.foodStore = new FoodStore();
    this.cart = new Cart();
    this.profile = new Profile();
    this.settings = new Settings();
  }
}

export const rootStore = new RootStore();

const StoreContext = React.createContext(rootStore);
export const useStore = () => React.useContext(StoreContext);
