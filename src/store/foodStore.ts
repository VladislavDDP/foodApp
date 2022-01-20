import {makeAutoObservable} from 'mobx';

import {FoodApi} from '../api/food-api/food-api';
import {UserApi} from '../api/user-api/userApi';
import {Category} from '../model/category';
import {Food} from '../model/food';
import {Reciept} from '../model/reciept';
import {RecieptItem} from '../model/recieptItem';
import {Storage} from '../storage/storage';

export class FoodStore {
  public allItems: Array<Food> = [];

  private allCategories: Array<Category> = [];
  private orderedItems: Array<Reciept> = [];
  private favouriteItems: Array<Food> = [];
  private foodApi: FoodApi;
  private userApi: UserApi;
  private storage: Storage;

  public constructor(foodApi: FoodApi, userApi: UserApi, storage: Storage) {
    this.foodApi = foodApi;
    this.userApi = userApi;
    this.storage = storage;
    this.initializeData();
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
    const newItem = new Food(item.id, item.name, item.price, item.photo, item.gallery, item.categories, true);
    this.favouriteItems.unshift(newItem);
    this.favouriteItems = [...this.favourites];
    await this.storage.addToFavourite(newItem);
  }

  public async removeFromFavourites(id: number) {
    this.favouriteItems = this.favourites.filter((item: Food) => item.id !== id);
    await this.storage.removeLike(id);
  }

  public async searchFoodByName(query: string) {
    this.allItems = await this.foodApi.getFood();
    return [...this.filterItems(query)];
  }

  public async getShoppingHistory() {
    const id = this.userApi.user?.id;
    if (id) {
      this.orderedItems = await this.userApi.getShoppingHistory(id);
    }
  }

  public async appendHistory(_item: RecieptItem) {
    // TODO: create order with api endpoint
  }

  public async initializeData() {
    this.allCategories = await this.foodApi.getCategories();
    this.favouriteItems = await this.storage.getLikedFood();
  }

  private filterItems(query: string) {
    return this.allItems.filter((item: Food) => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  }
}
