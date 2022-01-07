import {makeAutoObservable} from 'mobx';

import {foodApi} from '../api/foodApi/food-api';
import {Category} from '../model/categoryModel';
import {Food} from '../model/foodModel';

export class FoodHome {
  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public async getCategories() {
    const categories = await foodApi.getCategories();
    return categories;
  }

  public async getFoodByCategory(categoryId: number) {
    const food = await foodApi.getFood();
    const filteredFood = food.filter((item: Food) => item.categories.map((category: Category) => category.id).includes(categoryId));
    return filteredFood;
  }
}
