import {makeAutoObservable} from 'mobx';

import {foodApi} from '../api/foodApi/food-api';
import {Food} from '../model/foodModel';

export class Searcher {
  public allItems: Array<Food> = [];

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public async search(query: string) {
    if (!this.allItems.length) {
      this.allItems = await foodApi.getFood();
    }
    return [...this.filterItems(query)];
  }

  private filterItems(query: string) {
    return this.allItems.filter((item: Food) => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  }
}
