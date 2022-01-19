import {makeAutoObservable, runInAction} from 'mobx';

import {FoodApi} from '../api/food-api/food-api';
import {CartFood} from '../model/cartFood';
import {Category} from '../model/category';
import {Food} from '../model/food';
import {Reciept} from '../model/reciept';
import {Storage} from '../storage/storage';

export class FoodStore {
  public allItems: Array<Food> = [];

  private allCategories: Array<Category> = [];
  private orderedItems: Array<Reciept> = [];
  private favouriteItems: Array<Food> = [];
  private foodApi: FoodApi;
  private storage: Storage;

  public constructor(foodApi: FoodApi, storage: Storage) {
    this.foodApi = foodApi;
    this.storage = storage;
    this.getAllNeededStuff();
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public get favourites() {
    return this.favouriteItems;
  }

  public get orders() {
    return this.orderedItems;
  }

  public get categories() {
    return this.allCategories;
  }

  public async getFoodByCategory(categoryId: number) {
    const food = await this.foodApi.getFood();
    return food.filter((item: Food) => item.categories.map((category: Category) => category.id).includes(categoryId));
  }

  public async addToFavourite(item: Food) {
    this.favouriteItems.unshift(item);
    this.favouriteItems = [...this.favourites];
    await this.storage.addToFavourite(item);
  }

  public async removeFromFavourites(id: number) {
    this.favouriteItems = this.favourites.filter((item: Food) => item.id !== id);
    await this.storage.removeLike(id);
  }

  public async searchFoodByName(query: string) {
    this.allItems = await this.foodApi.getFood();
    return [...this.filterItems(query)];
  }

  public async appendHistory(items: Array<CartFood>) {
    // this.orderedItems = [...items, ...this.orders];
    await this.storage.updateShoppingHistory(items);
  }

  public async removeItemFromHistory(id: number) {
    // this.orderedItems = this.orders.filter((item: CartFood) => item.id !== id);
    await this.storage.removeFromShoppingHistory(id);
  }

  private getAllNeededStuff() {
    runInAction(async () => {
      const id = 2;
      this.orderedItems = await this.foodApi.getShoppingHistory(id);
      this.allCategories = await this.foodApi.getCategories();
      this.favouriteItems = await this.storage.getLikedFood();
    });
  }

  private filterItems(query: string) {
    return this.allItems.filter((item: Food) => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  }
}
