import {makeAutoObservable} from 'mobx';

import {CartFood} from '../model/cartFoodModel';
import {Food} from '../model/foodModel';

const defaultCartPrice = 0;
const indexOutOfRange = -1;
const one = 1;

export class Cart {
  public cartItems: Array<CartFood> = [];

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public get cartItemsQty() {
    return this.cartItems.length;
  }

  public get totalCartPrice() {
    return this.cartItems.reduce((acc: number, item: CartFood) => acc + item.price * item.qty, defaultCartPrice);
  }

  public addToCart(item: Food) {
    const index = this.cartItems.findIndex((cartItem: CartFood) => cartItem.id === item.id);
    if (index > indexOutOfRange) {
      this.cartItems[index].qty++;
    } else {
      this.cartItems.push(new CartFood(item.id, item.name, item.price, item.photo, item.gallery, one));
    }
  }

  public removeFromCart(id: number) {
    this.cartItems = this.cartItems.filter((item: CartFood) => item.id !== id);
  }

  public increaseQty(id: number) {
    const index = this.findIndex(id);
    if (index > indexOutOfRange) {
      const current = this.cartItems[index];
      this.cartItems[index] = {...current, qty: current.qty + one};
    }
  }

  public decreaseQty(id: number) {
    const index = this.findIndex(id);
    if (index > indexOutOfRange) {
      if (this.cartItems[index].qty - one) {
        const current = this.cartItems[index];
        this.cartItems[index] = {...current, qty: current.qty - one};
      } else {
        this.removeFromCart(id);
      }
    }
  }

  public clearCart() {
    this.cartItems = [];
  }

  private findIndex(id: number): number {
    return this.cartItems.findIndex((cartItem: CartFood) => cartItem.id === id);
  }
}
