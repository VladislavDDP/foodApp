import {Category} from './category';

export class Food {
  public id: number;
  public name: string;
  public price: number;
  public photo: string;
  public gallery: Array<string>;
  public categories: Array<Category>;
  public isLiked: boolean;

  public constructor(id: number, name: string, price: number, photo: string, gallery: Array<string>, categories: Array<Category>, isLiked: boolean) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.photo = photo;
    this.gallery = gallery;
    this.categories = categories;
    this.isLiked = isLiked;
  }
}
