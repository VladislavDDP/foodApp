import {makeAutoObservable} from 'mobx';

import {Food} from '../model/food';
import {injector} from '../utils/injector/Injector';
import {FavouritesService} from '../services/favourites.service';
import {Service} from '../services/service';

export class FavouritesStore {
  public favouriteItems: Array<Food> = [];

  private favouriteService: FavouritesService = injector.get<FavouritesService>(Service.Favourites);

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public addToFavourites = async (item: Food) => {
    await this.favouriteService.addToFavourite(new Food(item.id, item.name, item.price, item.photo, item.gallery, item.categories, true));
  };

  public getFavouriteItems = async () => {
    this.favouriteItems = await this.favouriteService.getFavouritesItems();
  };

  public removeFromFavourites = async (id: number) => {
    this.favouriteItems = this.favouriteItems.filter((item: Food) => item.id !== id);
    await this.favouriteService.updateFavouriteItem(id);
  };
}
