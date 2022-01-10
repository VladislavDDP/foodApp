export class Food {
  public id: number;
  public name: string;
  public price: number;
  public photo: string;
  public gallery: Array<string>;

  public constructor(id: number, name: string, price: number, photo: string, gallery: Array<string>) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.photo = photo;
    this.gallery = gallery;
  }
}
