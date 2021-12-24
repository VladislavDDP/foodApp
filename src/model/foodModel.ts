export class Food {
  public id: number;
  public name: string;
  public price: string;
  public photo: string;
  public gallery: Array<string>;

  public constructor(id: number, name: string, price: string, photo: string, gallery: Array<string>) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.photo = photo;
    this.gallery = gallery;
  }
}
