import {Configs} from '../config/configs';
import {DeliveryType} from '../model/deliveryType';
import {PaymentType} from '../model/PaymentType';
import {Storage} from '../storage/storage';
import {injector} from '../utils/injector/Injector';

export class ProfileService {
  private username: string = '';
  private email: string = '';
  private address: string = 'Kyiv';
  private phone: string = '+380956089898';
  private paymentOption: PaymentType = PaymentType.Card;
  private deliveryOption: DeliveryType = DeliveryType.DoorDelivery;

  private storage: Storage = injector.get<Storage>(Configs.AsyncMemory);

  public get Username() {
    return this.username;
  }

  public get Email() {
    return this.email;
  }

  public get Phone() {
    return this.phone;
  }

  public get Address() {
    return this.address;
  }

  public get PaymentOption() {
    return this.paymentOption;
  }

  public get DeliveryOption() {
    return this.deliveryOption;
  }

  public set Username(username: string) {
    this.username = username;
  }

  public set Email(email: string) {
    this.email = email;
  }

  public set Phone(phone: string) {
    this.phone = phone;
  }

  public set Address(address: string) {
    this.address = address;
  }

  public setPaymentOption = async (paymentOption: PaymentType) => {
    await this.storage.setUserInfo({address: this.address, paymentOption: paymentOption, deliveryOption: this.deliveryOption});
    this.paymentOption = paymentOption;
  };

  public setDeliveryOption = async (deliveryOption: DeliveryType) => {
    await this.storage.setUserInfo({address: this.address, paymentOption: this.paymentOption, deliveryOption: deliveryOption});
    this.deliveryOption = deliveryOption;
  };

  public loadUserProfile = async () => {
    const {address, paymentOption, deliveryOption} = await this.storage.getUserInfo();
    this.address = address;
    this.paymentOption = paymentOption || PaymentType.Card;
    this.deliveryOption = deliveryOption || DeliveryType.DoorDelivery;
  };

  public updateUserProfile = async (name: string, address: string, email: string) => {
    await this.storage.setUserInfo({address, paymentOption: this.paymentOption, deliveryOption: this.deliveryOption});
    this.username = name;
    this.address = address;
    this.email = email;
  };

  public updateDeliveryDetails = (name: string, address: string, phone: string) => {
    this.username = name;
    this.address = address;
    this.phone = phone;
  };
}
