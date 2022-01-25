import {makeAutoObservable} from 'mobx';

import {UserApi} from '../api/user-api/userApi';
import {DeliveryType} from '../model/deliveryType';
import {PaymentType} from '../model/PaymentType';

export class Profile {
  public name: string = 'Username';
  public address: string = 'Unknown';
  public phone: string = '+380999999999';
  public email: string = 'mymail@gmail.com';
  public paymentOption: PaymentType = PaymentType.Card;
  public deliveryOption: DeliveryType = DeliveryType.DoorDelivery;

  private userApi: UserApi;

  public constructor(userApi: UserApi) {
    this.userApi = userApi;
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public getUserData = () => {
    if (this.userApi.user) {
      this.name = this.userApi.user?.username;
      this.email = this.userApi.user?.email;
    }
  };

  public setPaymentMethod = (value: PaymentType) => {
    this.paymentOption = value;
  };

  public setDeliveryMethod = (value: DeliveryType) => {
    this.deliveryOption = value;
  };

  public updateUserProfile = (name: string, address: string, email: string) => {
    this.name = name;
    this.address = address;
    this.email = email;
  };

  public updateDeliveryDetails = (name: string, address: string, phone: string) => {
    this.name = name;
    this.address = address;
    this.phone = phone;
  };
}
