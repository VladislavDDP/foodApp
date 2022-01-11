import {makeAutoObservable} from 'mobx';

import {Food} from '../model/foodModel';
import {storage} from '../storage/storage';

export class Favourites {
  public items: Array<Food> = [];

  public constructor() {
    this.getFavouriteFood();
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public async getFavouriteFood() {
    this.items = await storage.getLikedFood();
  }

  public addToFavourite(item: Food) {
    storage.addToFavourite(item);
    this.items = [new Food(item.id, item.name, item.price, item.photo, item.gallery, item.categories, true), ...this.items];
  }

  public removeFromFavourites(id: number) {
    storage.removeLike(id);
    this.items = this.items.filter((item: Food) => item.id !== id);
  }
}
