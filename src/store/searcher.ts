import {makeAutoObservable} from 'mobx';

import food from '../food.json';
import {Food} from '../model/foodModel';

export class Searcher {
  public allItems: Array<Food> = [];
  public searchedItems: Array<Food> = [];

  public constructor() {
    this.allItems = food;
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public search(query: string): Array<Food> {
    this.searchedItems = this.allItems.filter((item: Food) => item.name.toLocaleLowerCase().includes(query));
    return [...this.searchedItems];
  }
}
