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
    this.updateFavouriteInShoppingCart(item.id, true);
  };

  public updateFavouriteItem = async (id: number) => {
    this.storage.removeLike(id);
    this.updateFavouriteInShoppingCart(id, false);
  };

  private updateFavouriteInShoppingCart = async (id: number, isLiked: boolean) => {
    const itemsFromCart = await this.storage.getCartItems();
    const updatedCartItems = itemsFromCart.map((cartItem: CartFood) =>
      cartItem.id === id
        ? new CartFood(cartItem.id, cartItem.name, cartItem.price, cartItem.photo, cartItem.gallery, cartItem.qty, cartItem.categories, isLiked)
        : cartItem,
    );
    this.storage.setCartItems(updatedCartItems);
  };
}
