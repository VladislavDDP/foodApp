import {Configs} from '../../config/configs';
import {CartFood} from '../../model/cartFood';
import {Storage} from '../../storage/storage';
import {injector} from '../../utils/injector/Injector';

export class CartService {
  public cartItems: Array<CartFood> = [];

  private storage: Storage = injector.get(Configs.AsyncMemory);

  public getItems = async () => this.storage.getCartItems();

  public setItems(cartItems: Array<CartFood>) {
    this.storage.setCartItems(cartItems);
  }
}
