import {Authentication} from './authentication';
import {Cart} from './cart';

export const store = () => {
  const cart = new Cart();
  const authentication = new Authentication();
  return {authentication, cart};
};
