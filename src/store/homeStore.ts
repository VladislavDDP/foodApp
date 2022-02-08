import {makeAutoObservable} from 'mobx';

import {FoodApi} from '../api/food-api/food-api';
import {Repository} from '../api/repository';
import {Category} from '../model/category';
import {Food} from '../model/food';
import {injector} from '../utils/injector/Injector';

export class HomeStore {
  public categories: Array<Category> = [];

  private foodApi: FoodApi = injector.get<FoodApi>(Repository.foodApi);

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public getFoodByCategory = async (categoryId: number) => {
    const food = await this.foodApi.getFood();
    return food.filter((item: Food) => item.categories.map((category: Category) => category.id).includes(categoryId));
  };

  public getCategories = async () => {
    if (!this.foodApi.categories.length) {
      this.categories = await this.foodApi.getCategories();
    } else {
      this.categories = this.foodApi.categories;
    }
  };
}
