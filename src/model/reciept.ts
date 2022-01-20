import {RecieptItem} from './recieptItem';

const defaultPrice = 0;
const fixedPoints = 1;

export class Reciept {
  public id: number;
  public address: string;
  public phone: string;
  public deliveryMethod: string;
  public payment: string;
  public createdAt: string;
  public items: Array<RecieptItem>;
  public totalPrice: string;

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
    this.createdAt = new Date(createdAt).toDateString();
    this.items = items;
    this.totalPrice = items.reduce((acc: number, item: RecieptItem) => acc + item.attributes.price * item.qty, defaultPrice).toFixed(fixedPoints);
  }
}
