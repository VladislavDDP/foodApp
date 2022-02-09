import {makeAutoObservable} from 'mobx';

import {FoodApi} from '../api/food-api/food-api';
import {Repository} from '../api/repository';
import {Food} from '../model/food';
import {injector} from '../utils/injector/Injector';

export class SearchStore {
  public allItems: Array<Food> = [];

  private foodApi: FoodApi = injector.get<FoodApi>(Repository.foodApi);

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public fetchAllItems = async () => {
    if (!this.allItems.length) {
      this.allItems = await this.foodApi.getFood();
    }
  };

  public searchFoodByName = async (query: string) => {
    await this.fetchAllItems();
    return this.filterItems(query);
  };

  private filterItems = (query: string) => this.allItems.filter((item: Food) => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
}
