import {Configs} from '../config/configs';
import {CartFood} from '../model/cartFood';
import {Food} from '../model/food';
import {Storage} from '../storage/storage';
import {injector} from '../utils/injector/Injector';

export class CartService {
  public cartItems: Array<CartFood> = [];

  private storage: Storage = injector.get<Storage>(Configs.AsyncMemory);

  public addToCart = async (item: Food) => {
    const cartItems = await this.storage.getCartItems();
    this.storage.setCartItems([item, ...cartItems]);
  };

  public getItems = async () => this.storage.getCartItems();

  public setItems(cartItems: Array<CartFood>) {
    this.storage.setCartItems(cartItems);
  }
}
