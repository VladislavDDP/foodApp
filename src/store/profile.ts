import {makeAutoObservable} from 'mobx';

import {PaymentOptionValue} from '../screens/drawer/profile/paymentOption.types';
import {DeliveryOptionValue} from '../screens/checkout/deliveryOptions.types';

export class Profile {
  public name: string = 'Username';
  public address: string = 'Unknown';
  public phone: string = '+380999999999';
  public email: string = 'mymail@gmail.com';
  public paymentOption: string = PaymentOptionValue.Card;
  public deliveryOption: string = DeliveryOptionValue.DoorDelivery;

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public setPaymentMethod(value: string) {
    this.paymentOption = value;
  }

  public setDeliveryMethod(value: string) {
    this.deliveryOption = value;
  }

  public updateUserProfile(name: string, address: string, email: string) {
    this.name = name;
    this.address = address;
    this.email = email;
  }
}
