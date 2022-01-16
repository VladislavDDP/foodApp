import {makeAutoObservable} from 'mobx';

import {DeliveryType} from '../screens/checkout/deliveryOptions.types';
import {PaymentType} from '../screens/drawer/profile/paymentOption.types';

export class Profile {
  public name: string = 'Username';
  public address: string = 'Unknown';
  public phone: string = '+380999999999';
  public email: string = 'mymail@gmail.com';
  public paymentOption: PaymentType = PaymentType.Card;
  public deliveryOption: DeliveryType = DeliveryType.DoorDelivery;

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public setPaymentMethod(value: PaymentType) {
    this.paymentOption = value;
  }

  public setDeliveryMethod(value: DeliveryType) {
    this.deliveryOption = value;
  }

  public updateUserProfile(name: string, address: string, email: string) {
    this.name = name;
    this.address = address;
    this.email = email;
  }

  public updateDeliveryDetails(name: string, address: string, phone: string) {
    this.name = name;
    this.address = address;
    this.phone = phone;
  }
}
