import {makeAutoObservable} from 'mobx';

import {CartFood} from './cart';

export class ShoppingHistory {
  public items: Array<CartFood> = [];

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public appendHistory(item: CartFood) {
    this.items.push(item);
  }

  public clearHistory() {
    this.items = [];
  }
}
