import {makeAutoObservable} from 'mobx';

import {CartFood} from '../model/cartFood';
import {injector} from '../utils/injector/Injector';
import {Service} from '../services/service';
import {CartService} from '../services/cart.service';

const defaultCartPrice = 0;
const indexOutOfRange = -1;
const one = 1;

export class CartStore {
  public cartItems: Array<CartFood> = [];

  private cartService: CartService = injector.get<CartService>(Service.Cart);

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public get items() {
    return this.cartItems;
  }

  public get cartItemsQty() {
    return this.cartItems.length;
  }

  public get totalCartPrice() {
    return this.cartItems.reduce((acc: number, item: CartFood) => acc + item.price * item.qty, defaultCartPrice);
  }

  public getCartItems = async () => {
    this.cartItems = await this.cartService.getCartItems();
  };

  public getCartItemsQty = async () => {
    const response = await this.cartService.getCartItems();
    return response.length;
  };

  public removeFromCart(id: number) {
    this.cartItems = this.cartItems.filter((item: CartFood) => item.id !== id);
    this.cartService.setItems(this.cartItems);
  }

  public increaseQty = async (id: number) => {
    const index = this.findCartItemIndex(id);
    if (index > indexOutOfRange) {
      const item = this.cartItems[index];
      this.cartItems[index] = new CartFood(item.id, item.name, item.price, item.photo, item.gallery, item.qty + one, item.categories, item.isLiked);
      this.cartItems = [...this.cartItems];
      await this.cartService.setItems(this.cartItems);
    }
  };

  public decreaseQty = async (id: number) => {
    const index = this.findCartItemIndex(id);
    if (index > indexOutOfRange) {
      if (this.cartItems[index].qty - one) {
        const item = this.cartItems[index];
        this.cartItems[index] = new CartFood(item.id, item.name, item.price, item.photo, item.gallery, item.qty - one, item.categories, item.isLiked);
        this.cartItems = [...this.cartItems];
      } else {
        this.removeFromCart(id);
      }
      await this.cartService.setItems(this.cartItems);
    }
  };

  public clearCart = async () => {
    this.cartItems = [];
    await this.cartService.setItems(this.cartItems);
  };

  private findCartItemIndex = (id: number): number => this.cartItems.findIndex((cartItem: CartFood) => cartItem.id === id);
}
