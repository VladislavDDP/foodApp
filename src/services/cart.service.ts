import {Configs} from '../config/configs';
import {CartFood} from '../model/cartFood';
import {Food} from '../model/food';
import {Storage} from '../storage/storage';
import {injector} from '../utils/injector/Injector';

export class CartService {
  private storage: Storage = injector.get<Storage>(Configs.AsyncMemory);

  public addToCart = async (item: Food) => {
    const cartItems = await this.storage.getCartItems();
    this.storage.setCartItems([item, ...cartItems]);
  };

  public getCartItems = async () => {
    const itemsFromCart = await this.storage.getCartItems();
    const favouriteItems = await this.storage.getLikedFood();
    const updatedCartItems = itemsFromCart.map((cartItem: CartFood) =>
      favouriteItems.some((favouriteItem: Food) => favouriteItem.id === cartItem.id)
        ? new CartFood(cartItem.id, cartItem.name, cartItem.price, cartItem.photo, cartItem.gallery, cartItem.qty, cartItem.categories, true)
        : new CartFood(cartItem.id, cartItem.name, cartItem.price, cartItem.photo, cartItem.gallery, cartItem.qty, cartItem.categories, false),
    );
    await this.storage.setCartItems(updatedCartItems);

    return updatedCartItems;
  };

  public setItems = async (cartItems: Array<CartFood>) => {
    await this.storage.setCartItems(cartItems);
  };
}
