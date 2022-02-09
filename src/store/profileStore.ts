import {makeAutoObservable} from 'mobx';

import {Repository} from '../api/repository';
import {UserApi} from '../api/user-api/userApi';
import {DeliveryType} from '../model/deliveryType';
import {PaymentType} from '../model/PaymentType';
import {injector} from '../utils/injector/Injector';
import {Service} from '../services/service';
import {ProfileService} from '../services/profile.service';

export class ProfileStore {
  public username: string = '';
  public email: string = '';
  public address: string = '';
  public paymentOption: PaymentType;
  public deliveryOption: DeliveryType;

  private profileRepository: ProfileService = injector.get<ProfileService>(Service.Profile);
  private userApi: UserApi = injector.get<UserApi>(Repository.userApi);

  public constructor() {
    this.username = this.userApi.user?.username as string;
    this.email = this.userApi.user?.email as string;
    this.address = this.profileRepository.Address;
    this.paymentOption = this.profileRepository.PaymentOption;
    this.deliveryOption = this.profileRepository.DeliveryOption;
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public get phone() {
    return this.profileRepository.Phone;
  }

  public get PaymentOption() {
    return this.paymentOption;
  }

  public get DeliveryOption() {
    return this.deliveryOption;
  }

  public setPaymentMethod = async (value: PaymentType) => {
    await this.profileRepository.setPaymentOption(value);
    this.paymentOption = value;
  };

  public setDeliveryMethod = async (value: DeliveryType) => {
    await this.profileRepository.setDeliveryOption(value);
    this.deliveryOption = value;
  };

  public updateUserProfile = async (name: string, address: string, email: string) => {
    await this.profileRepository.updateUserProfile(name, address, email);
    this.username = name;
    this.address = address;
    this.email = email;
  };

  public updateDeliveryDetails = (name: string, address: string, phone: string) => {
    this.profileRepository.updateDeliveryDetails(name, address, phone);
  };
}
