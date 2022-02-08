import {makeAutoObservable} from 'mobx';

import {CartFood} from '../model/cartFood';
import {Food} from '../model/food';
import {injector} from '../utils/injector/Injector';
import {Service} from '../services/service';
import {CartService} from '../services/cart.service';

const defaultCartPrice = 0;
const indexOutOfRange = -1;
const one = 1;

export class Cart {
  public cartItems: Array<CartFood> = [];

  private cartService: CartService = injector.get<CartService>(Service.Cart);

  public constructor() {
    this.getCartItems();
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public get items() {
    return this.cartItems;
  }

  public get totalCartPrice() {
    return this.cartItems.reduce((acc: number, item: CartFood) => acc + item.price * item.qty, defaultCartPrice);
  }

  public getCartItemsQty = async () => {
    const response = await this.cartService.getItems();
    return response.length;
  };

  public updateCart = (item: CartFood | Food) => {
    const index = this.findCartItemIndex(item.id);
    if (index > indexOutOfRange) {
      this.cartItems[index].isLiked = item.isLiked;
      this.cartItems = [...this.cartItems];
      this.cartService.setItems(this.cartItems);
    }
  };

  public removeFromCart(id: number) {
    this.cartItems = this.cartItems.filter((item: CartFood) => item.id !== id);
    this.cartService.setItems(this.cartItems);
  }

  public increaseQty = (id: number) => {
    const index = this.findCartItemIndex(id);
    if (index > indexOutOfRange) {
      const item = this.cartItems[index];
      this.cartItems[index] = new CartFood(item.id, item.name, item.price, item.photo, item.gallery, item.qty + one, item.categories, item.isLiked);
      this.cartItems = [...this.cartItems];
      this.cartService.setItems(this.cartItems);
    }
  };

  public decreaseQty = (id: number) => {
    const index = this.findCartItemIndex(id);
    if (index > indexOutOfRange) {
      if (this.cartItems[index].qty - one) {
        const item = this.cartItems[index];
        this.cartItems[index] = new CartFood(item.id, item.name, item.price, item.photo, item.gallery, item.qty - one, item.categories, item.isLiked);
        this.cartItems = [...this.cartItems];
      } else {
        this.removeFromCart(id);
      }
      this.cartService.setItems(this.cartItems);
    }
  };

  public clearCart = () => {
    this.cartItems = [];
    this.cartService.setItems(this.cartItems);
  };

  private getCartItems = async () => {
    this.cartItems = await this.cartService.getItems();
  };

  private findCartItemIndex = (id: number): number => this.cartItems.findIndex((cartItem: CartFood) => cartItem.id === id);
}
