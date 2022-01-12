import {makeAutoObservable} from 'mobx';

import {FoodApi} from '../api/foodApi/food-api';
import {CartFood} from '../model/cartFood';
import {Category} from '../model/category';
import {Food} from '../model/food';
import {Storage} from '../storage/storage';

export class FoodStore {
  public allItems: Array<Food> = [];

  public foodApi: FoodApi;
  public storage: Storage;

  public constructor(foodApi: FoodApi, storage: Storage) {
    this.foodApi = foodApi;
    this.storage = storage;
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public async getFavouriteFood() {
    const favouriteFood = await this.storage.getLikedFood();
    return favouriteFood;
  }

  public async getCategories() {
    const categories = await this.foodApi.getCategories();
    return categories;
  }

  public async getFoodByCategory(categoryId: number) {
    const food = await this.foodApi.getFood();
    return food.filter((item: Food) => item.categories.map((category: Category) => category.id).includes(categoryId));
  }

  public async addToFavourite(item: Food) {
    await this.storage.addToFavourite(item);
  }

  public async removeFromFavourites(id: number) {
    await this.storage.removeLike(id);
  }

  public async searchFoodByName(query: string) {
    this.allItems = await this.foodApi.getFood();
    return [...this.filterItems(query)];
  }

  public async getShoppingHistory() {
    const shoppingHistoryItems = await this.storage.getShoppingHistory();
    return shoppingHistoryItems;
  }

  public appendHistory(items: Array<CartFood>) {
    this.storage.updateShoppingHistory(items);
  }

  public removeItemFromHistory(id: number) {
    this.storage.removeFromShoppingHistory(id);
  }

  private filterItems(query: string) {
    return this.allItems.filter((item: Food) => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  }
}
