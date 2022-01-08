import {makeAutoObservable} from 'mobx';

import {CartFood} from '../model/cartFoodModel';
import {storage} from '../storage/storage';

export class ShoppingHistory {
  public items: Array<CartFood> = [];

  public constructor() {
    this.getShoppingHistory();
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public async getShoppingHistory() {
    this.items = await storage.getShoppingHistory();
  }

  public appendHistory(items: Array<CartFood>) {
    this.items = [...this.items, ...items];
    storage.saveShoppingHistory(this.items);
  }

  public removeItemFromHistory(id: number) {
    this.items = this.items.filter((item: CartFood) => item.id !== id);
    storage.saveShoppingHistory(this.items);
  }
}
