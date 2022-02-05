import {Food} from '../src/model/food';
import {Cart} from '../src/store/cart';
import food from './mocks/food.json';

describe('Testing shopping cart', () => {
  let cart: Cart;
  let item: Food;

  beforeEach(() => {
    cart = new Cart();
    item = new Food(
      food.id,
      food.attributes.name,
      food.attributes.price,
      food.attributes.photo,
      food.attributes.gallery,
      food.attributes.categories.data.map(el => ({id: el.id, name: el.attributes.name})),
      false,
    );
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
