import {makeAutoObservable} from 'mobx';

import {Food} from '../model/foodModel';

const defaultCartPrice = 0;
const indexOutOfRange = -1;
const step = 1;

export interface CartFood extends Food {
  qty: number;
}

export class Cart {
  public cartItems: Array<CartFood> = [];

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public addToCart(item: Food) {
    const index = this.cartItems.findIndex((cartItem: CartFood) => cartItem.id === item.id);
    if (index > indexOutOfRange) {
      this.cartItems[index].qty++;
    } else {
      this.cartItems.push({...item, qty: 1});
    }
  }

  public removeFromCart(id: number) {
    this.cartItems = this.cartItems.filter((item: CartFood) => item.id !== id);
  }

  public increaseQty(id: number) {
    const index = this.findIndex(id);
    if (index > indexOutOfRange) {
      const current = this.cartItems[index];
      this.cartItems[index] = {...current, qty: current.qty + step};
    }
  }

  public decreaseQty(id: number) {
    const index = this.findIndex(id);
    if (index > indexOutOfRange) {
      if (this.cartItems[index].qty - step) {
        const current = this.cartItems[index];
        this.cartItems[index] = {...current, qty: current.qty - step};
      } else {
        this.removeFromCart(id);
      }
    }
  }

  public totalCartPrice() {
    return this.cartItems.reduce((acc: number, item: CartFood) => acc + parseFloat(item.price) * item.qty, defaultCartPrice);
  }

  private findIndex(id: number): number {
    return this.cartItems.findIndex((cartItem: CartFood) => cartItem.id === id);
  }
}
