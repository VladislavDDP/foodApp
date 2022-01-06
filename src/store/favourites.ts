import {makeAutoObservable} from 'mobx';

import {Food} from '../model/foodModel';

export class Favourites {
  public items: Array<Food> = [];

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public addToFavourite(item: Food) {
    this.items.push(item);
  }

  public removeFromFavourites(id: number) {
    this.items = this.items.filter((item: Food) => item.id !== id);
  }
}
