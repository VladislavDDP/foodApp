import {makeAutoObservable} from 'mobx';

import {CartFood} from '../model/cartFood';
import {Food} from '../model/food';

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

  public addToCart = (item: Food) => {
    const index = this.findCartItemIndex(item.id);
    if (index > indexOutOfRange) {
      const cur = this.cartItems[index];
      this.cartItems[index] = new CartFood(cur.id, cur.name, cur.price, cur.photo, cur.gallery, cur.qty + one, cur.categories, cur.isLiked);
    } else {
      this.cartItems.unshift(new CartFood(item.id, item.name, item.price, item.photo, item.gallery, one, item.categories, item.isLiked));
    }
  };

  public updateCart = (item: CartFood | Food) => {
    const index = this.findCartItemIndex(item.id);
    if (index > indexOutOfRange) {
      this.cartItems[index].isLiked = item.isLiked;
      this.cartItems = [...this.cartItems];
    }
  };

  public removeFromCart(id: number) {
    this.cartItems = this.cartItems.filter((item: CartFood) => item.id !== id);
  }

  public increaseQty = (id: number) => {
    const index = this.findCartItemIndex(id);
    if (index > indexOutOfRange) {
      const item = this.cartItems[index];
      this.cartItems[index] = new CartFood(item.id, item.name, item.price, item.photo, item.gallery, item.qty + one, item.categories, item.isLiked);
      this.cartItems = [...this.cartItems];
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
    }
  };

  public clearCart = () => {
    this.cartItems = [];
  };

  private findCartItemIndex = (id: number): number => this.cartItems.findIndex((cartItem: CartFood) => cartItem.id === id);
}
