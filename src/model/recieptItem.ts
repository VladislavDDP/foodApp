import {Category} from './category';
import {RecieptFood} from './recieptFood';

export class RecieptItem {
  public id: number;
  public qty: number;
  public attributes: {
    name: string;
    photo: string;
    price: number;
    gallery: Array<string>;
    categories: Array<Category>;
  };

  public constructor(id: number, qty: number, attributes: RecieptFood) {
    this.id = id;
    this.qty = qty;
    this.attributes = attributes;
  }
}
