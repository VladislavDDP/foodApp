import {makeAutoObservable} from 'mobx';

import {CartFood} from '../model/cartFoodModel';

export class ShoppingHistory {
  public items: Array<CartFood> = [];

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public appendHistory(items: Array<CartFood>) {
    this.items = [...this.items, ...items];
  }

  public clearHistory() {
    this.items = [];
  }
}
