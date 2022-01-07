import {makeAutoObservable} from 'mobx';

import {Food} from '../model/foodModel';
import {storage} from '../storage/storage';

export class Favourites {
  public items: Array<Food> = [];

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public addToFavourite(item: Food) {
    storage.addToFavourite(item);
    this.items.push(item);
  }

  public removeFromFavourites(id: number) {
    storage.removeLike(id);
    this.items = this.items.filter((item: Food) => item.id !== id);
  }
}
