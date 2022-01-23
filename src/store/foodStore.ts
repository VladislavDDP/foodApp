import {makeAutoObservable} from 'mobx';

import {FoodApi} from '../api/food-api/food-api';
import {UserApi} from '../api/user-api/userApi';
import {CartFood} from '../model/cartFood';
import {Category} from '../model/category';
import {Food} from '../model/food';
import {Reciept} from '../model/reciept';
import {DeliveryType} from '../screens/checkout/deliveryOptions.types';
import {PaymentType} from '../screens/drawer/profile/paymentOption.types';
import {Storage} from '../storage/storage';

interface RecieptDetails {
  address: string;
  phone: string;
  delivery_method: DeliveryType;
  payment: PaymentType;
  items: Array<CartFood>;
}

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

  public getFoodByCategory = async (categoryId: number) => {
    this.userApi.removeUserToken();
    const food = await this.foodApi.getFood();
    return food.filter((item: Food) => item.categories.map((category: Category) => category.id).includes(categoryId));
  };

  public addToFavourite = async (item: Food) => {
    const newItem = new Food(item.id, item.name, item.price, item.photo, item.gallery, item.categories, true);
    this.favouriteItems.unshift(newItem);
    this.favouriteItems = [...this.favourites];
    await this.storage.addToFavourite(newItem);
  };

  public removeFromFavourites = async (id: number) => {
    this.favouriteItems = this.favourites.filter((item: Food) => item.id !== id);
    await this.storage.removeLike(id);
  };

  public searchFoodByName = async (query: string) => {
    this.allItems = await this.foodApi.getFood();
    return [...this.filterItems(query)];
  };

  public getShoppingHistory = async () => {
    const id = this.userApi.user?.id;
    if (id) {
      this.orderedItems = await this.userApi.getShoppingHistory(id);
    }
  };

  public appendHistory = async (item: RecieptDetails) => {
    const response = await this.userApi.purchaseFood(item);
    if (response) {
      return true;
    }
  };

  public initializeData = async () => {
    this.allCategories = await this.foodApi.getCategories();
    this.favouriteItems = await this.storage.getLikedFood();
  };

  private filterItems = (query: string) => this.allItems.filter((item: Food) => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
}
