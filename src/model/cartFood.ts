import {Category} from './category';
import {Food} from './food';

export class CartFood extends Food {
  public qty: number;

  public constructor(
    id: number,
    name: string,
    price: number,
    photo: string,
    gallery: Array<string>,
    qty: number,
    categories: Array<Category>,
    isLiked: boolean,
  ) {
    super(id, name, price, photo, gallery, categories, isLiked);
    this.qty = qty;
  }
}
