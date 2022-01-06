import React from 'react';

import {Authentication} from './authentication';
import {Cart} from './cart';
import {Favourites} from './favourites';
import {Searcher} from './searcher';
import {ShoppingHistory} from './shoppingHistory';

export const store = () => {
  const authentication = new Authentication();
  const cart = new Cart();
  const favourites = new Favourites();
  const shoppingHistory = new ShoppingHistory();
  const searcher = new Searcher();
  return {authentication, cart, favourites, shoppingHistory, searcher};
};

export const StoreContext = React.createContext(store());

export const useStore = () => React.useContext(StoreContext);
