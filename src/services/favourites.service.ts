import {Configs} from '../config/configs';
import {CartFood} from '../model/cartFood';
import {Food} from '../model/food';
import {Storage} from '../storage/storage';
import {injector} from '../utils/injector/Injector';

export class FavouritesService {
  private storage: Storage = injector.get<Storage>(Configs.AsyncMemory);

  public getFavouritesItems = async () => this.storage.getLikedFood();

  public setFavouritesItems = async (item: Food | CartFood) => this.storage.addToFavourite(item);

  public addToFavourite = async (item: Food) => {
    await this.storage.addToFavourite(item);
  };

  public removeFavouriteItem = async (id: number) => {
    await this.storage.removeLike(id);
  };
}
