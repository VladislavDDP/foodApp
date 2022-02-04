// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-magic-numbers */
import {Food} from '../src/model/food';
import {Cart} from '../src/store/cart';
import food from './mocks/food.json';

describe('Testing shopping cart', () => {
  let cart: Cart;
  let item: Food;

  beforeEach(() => {
    cart = new Cart();
    item = new Food(food.id, food.name, food.price, food.photo, food.gallery, food.categories, food.isLiked);
  });

  it('Add one item to cart', () => {
    cart.addToCart(item);
    expect(cart.cartItems.length).toBe(1);
  });

  it('Get shopping cart price', () => {
    cart.addToCart(item);
    cart.addToCart(item);

    expect(cart.totalCartPrice).toEqual(2);
  });
});
