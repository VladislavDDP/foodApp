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
    const updatedCartItems = itemsFromCart.map(
      (cart: CartFood) =>
        new CartFood(
          cart.id,
          cart.name,
          cart.price,
          cart.photo,
          cart.gallery,
          cart.qty,
          cart.categories,
          favouriteItems.some((favourite: Food) => favourite.id === cart.id),
        ),
    );
    await this.storage.setCartItems(updatedCartItems);

    return updatedCartItems;
  };

  public setItems = async (cartItems: Array<CartFood>) => {
    await this.storage.setCartItems(cartItems);
  };
}
