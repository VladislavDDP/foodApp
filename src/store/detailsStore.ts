import {makeAutoObservable} from 'mobx';

import {CartFood} from '../model/cartFood';
import {Food} from '../model/food';
import {injector} from '../utils/injector/Injector';
import {CartService} from '../services/cart.service';
import {FavouritesService} from '../services/favourites.service';
import {Service} from '../services/service';

const indexOutOfRange = -1;
const one = 1;

export class DetailsStore {
  private cartService: CartService = injector.get<CartService>(Service.Cart);
  private favouriteService: FavouritesService = injector.get<FavouritesService>(Service.Favourites);

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public addToCart = async (item: Food) => {
    const cartItems = await this.cartService.getItems();
    const index = cartItems.findIndex((cartItem: CartFood) => cartItem.id === item.id);

    if (index > indexOutOfRange) {
      const cur = cartItems[index];
      cartItems[index] = new CartFood(cur.id, cur.name, cur.price, cur.photo, cur.gallery, cur.qty + one, cur.categories, cur.isLiked);
    } else {
      cartItems.unshift(new CartFood(item.id, item.name, item.price, item.photo, item.gallery, one, item.categories, item.isLiked));
    }
    this.cartService.setItems(cartItems);
  };

  public addToFavourites = (item: Food) => {
    this.favouriteService.addToFavourite(new Food(item.id, item.name, item.price, item.photo, item.gallery, item.categories, true));
  };

  public removeFromFavourites = (id: number) => {
    this.favouriteService.updateFavouriteItem(id);
  };
}
