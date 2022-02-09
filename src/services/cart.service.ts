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

  public getItems = async () => this.storage.getCartItems();

  public setItems = async (cartItems: Array<CartFood>) => {
    await this.storage.setCartItems(cartItems);
  };
}
