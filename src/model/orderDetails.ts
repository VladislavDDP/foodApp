import {CartFood} from './cartFood';
import {DeliveryType} from '../screens/checkout/deliveryOptions.types';
import {PaymentType} from '../screens/drawer/profile/paymentOption.types';

export class OrderDetails {
  public address: string;
  public phone: string;
  public deliveryMethod: DeliveryType;
  public payment: PaymentType;
  public items: Array<CartFood>;

  public constructor(address: string, phone: string, deliveryMethod: DeliveryType, payment: PaymentType, items: Array<CartFood>) {
    this.address = address;
    this.phone = phone;
    this.deliveryMethod = deliveryMethod;
    this.payment = payment;
    this.items = items;
  }
}
