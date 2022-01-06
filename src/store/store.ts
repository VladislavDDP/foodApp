import React from 'react';

import {Authentication} from './authentication';
import {Cart} from './cart';
import {Favourites} from './favourites';
import {Searcher} from './searcher';
import {ShoppingHistory} from './shoppingHistory';

export class Store {
  public authentication: Authentication;
  public cart: Cart;
  public favourites: Favourites;
  public shoppingHistory: ShoppingHistory;
  public searcher: Searcher;

  public constructor() {
    this.authentication = new Authentication();
    this.cart = new Cart();
    this.favourites = new Favourites();
    this.shoppingHistory = new ShoppingHistory();
    this.searcher = new Searcher();
  }
}

export const store = new Store();

const StoreContext = React.createContext(store);

export const useStore = () => React.useContext(StoreContext);
