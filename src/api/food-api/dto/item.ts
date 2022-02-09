import {Category} from '../../../model/category';

export interface OrderedItem {
  id: number;
  qty: number;
  attributes: {
    name: string;
    photo: string;
    price: number;
    gallery: Array<string>;
    categories: Array<Category>;
  };
}
