import {Category} from './category';

export class RecieptFood {
  public name: string;
  public photo: string;
  public price: number;
  public gallery: Array<string>;
  public categories: Array<Category>;

  public constructor(name: string, photo: string, price: number, gallery: Array<string>, categories: Array<Category>) {
    this.name = name;
    this.photo = photo;
    this.price = price;
    this.gallery = gallery;
    this.categories = categories;
  }
}
