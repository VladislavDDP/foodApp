import {makeAutoObservable} from 'mobx';

import {Food} from '../model/foodModel';
import {mapToFood} from './foodHome';

export class Searcher {
  public allItems: Array<Food> = [];

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public async getFood() {
    const response = await fetch('https://rn-delivery-api.herokuapp.com/api/foods?populate=*');
    const food = await response.json();
    const mappedFood = food.data.map(mapToFood);
    return mappedFood;
  }

  public async search(query: string) {
    if (!this.allItems.length) {
      this.allItems = await this.getFood();
    }
    return [...this.filterItems(query)];
  }

  private filterItems(query: string) {
    return this.allItems.filter((item: Food) => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  }
}
