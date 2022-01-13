const defaultPrice = 0;

interface RecieptItem {
  id: number;
  name: string;
  photo: string;
  price: number;
  gallery: Array<string>;
  categories: Array<{id: number; name: string}>;
}

export class Receipt {
  public id: number;
  public address: string;
  public phone: string;
  public deliveryMethod: string;
  public payment: string;
  public createdAt: string;
  public items: Array<RecieptItem>;
  public totalPrice: number;

  public constructor(
    id: number,
    address: string,
    payment: string,
    phone: string,
    deliveryMethod: string,
    createdAt: string,
    items: Array<RecieptItem>,
  ) {
    this.id = id;
    this.address = address;
    this.payment = payment;
    this.phone = phone;
    this.deliveryMethod = deliveryMethod;
    this.createdAt = createdAt;
    this.items = items;
    this.totalPrice = items.reduce((acc: number, item: RecieptItem) => acc + item.price, defaultPrice);
  }
}
