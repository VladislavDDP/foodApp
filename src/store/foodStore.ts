import {makeAutoObservable, runInAction} from 'mobx';

import {FoodApi} from '../api/foodApi/food-api';
import {CartFood} from '../model/cartFood';
import {Category} from '../model/category';
import {Food} from '../model/food';
import {Storage} from '../storage/storage';

export class FoodStore {
  public allItems: Array<Food> = [];
  public categories: Array<Category> = [];
  public orders: Array<CartFood> = [];
  public favourites: Array<Food> = [];

  private foodApi: FoodApi;
  private storage: Storage;

  public constructor(foodApi: FoodApi, storage: Storage) {
    this.foodApi = foodApi;
    this.storage = storage;
    this.getAllNeededStuff();
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public async getFoodByCategory(categoryId: number) {
    const food = await this.foodApi.getFood();
    return food.filter((item: Food) => item.categories.map((category: Category) => category.id).includes(categoryId));
  }

  public async addToFavourite(item: Food) {
    this.favourites.unshift(item);
    this.favourites = [...this.favourites];
    await this.storage.addToFavourite(item);
  }

  public async removeFromFavourites(id: number) {
    this.favourites = this.favourites.filter((item: Food) => item.id !== id);
    await this.storage.removeLike(id);
  }

  public async searchFoodByName(query: string) {
    this.allItems = await this.foodApi.getFood();
    return [...this.filterItems(query)];
  }

  public appendHistory(items: Array<CartFood>) {
    this.orders = [...items, ...this.orders];
    this.storage.updateShoppingHistory(items);
  }

  public removeItemFromHistory(id: number) {
    this.orders = this.orders.filter((item: CartFood) => item.id !== id);
    this.storage.removeFromShoppingHistory(id);
  }

  private getAllNeededStuff() {
    runInAction(async () => {
      this.categories = await this.foodApi.getCategories();
      this.favourites = await this.storage.getLikedFood();
      this.orders = await this.storage.getShoppingHistory();
    });
  }

  private filterItems(query: string) {
    return this.allItems.filter((item: Food) => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  }
}
