import React, {useContext} from 'react';
import {configure} from 'mobx';

import {FoodApi} from '../api/food-api/food-api';
import {HttpApi} from '../api/http-api';
import {Storage} from '../storage/storage';
import {Authentication} from './authentication';
import {Cart} from './cart';
import {FoodStore} from './foodStore';
import {Profile} from './profile';
import {UserApi} from '../api/user-api/userApi';

configure({
  enforceActions: 'never',
});

export class RootStore {
  public authentication: Authentication;
  public foodStore: FoodStore;
  public cart: Cart;
  public profile: Profile;

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
    this.foodStore = new FoodStore(this.foodApi, this.storage);
    this.cart = new Cart();
    this.profile = new Profile();
  }
}

let store: RootStore;

const StoreContext = React.createContext<RootStore>({} as RootStore);

export const RootStoreProvider = ({children}: {children: React.ReactNode}) => {
  const root = store ?? new RootStore();

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);
