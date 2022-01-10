import {Food} from './foodModel';

export class CartFood extends Food {
  public qty: number;

  public constructor(id: number, name: string, price: number, photo: string, gallery: Array<string>, qty: number) {
    super(id, name, price, photo, gallery);
    this.qty = qty;
  }
}
