import {Configs} from '../src/config/configs';
import {Food} from '../src/model/food';
import {Storage} from '../src/storage/storage';
import {Cart} from '../src/store/cart';
import {CartService} from '../src/store/services/cart.service';
import {Service} from '../src/store/services/service';
import {injector} from '../src/utils/injector/Injector';
import food from './mocks/food.json';

const dumbFoodItem = new Food(
  food.id,
  food.attributes.name,
  food.attributes.price,
  food.attributes.photo,
  food.attributes.gallery,
  food.attributes.categories.data.map(el => ({id: el.id, name: el.attributes.name})),
  false,
);

describe('Testing shopping cart', () => {
  let cart: Cart;

  beforeEach(() => {
    injector.set(Configs.AsyncMemory, new Storage());
    injector.set(Service.Cart, new CartService());
    cart = new Cart();
  });

  it('Add one item to cart', () => {
    cart.addToCart(dumbFoodItem);
    expect(cart.cartItems.length).toBe(1);
  });

  it('Get shopping cart price', () => {
    cart.addToCart(dumbFoodItem);
    cart.addToCart(dumbFoodItem);

    expect(cart.totalCartPrice).toEqual(5);
  });
});
