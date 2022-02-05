import {makeAutoObservable} from 'mobx';

import {Repository} from '../api/repository';
import {UserApi} from '../api/user-api/userApi';
import {DeliveryType} from '../model/deliveryType';
import {PaymentType} from '../model/PaymentType';
import {injector} from '../utils/injector/Injector';
import {Service} from './services/service';
import {ProfileService} from './services/profile.service';

export class Profile {
  private profileRepository: ProfileService = injector.get<ProfileService>(Service.Profile);
  private userApi: UserApi = injector.get<UserApi>(Repository.userApi);

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public get username() {
    return this.userApi.user?.username;
  }

  public get email() {
    return this.userApi.user?.email;
  }

  public get address() {
    return this.profileRepository.address;
  }

  public get phone() {
    return this.profileRepository.phone;
  }

  public get paymentMethod() {
    return this.profileRepository.paymentOption;
  }

  public get deliveryMethod() {
    return this.profileRepository.deliveryOption;
  }

  public setPaymentMethod = (value: PaymentType) => {
    this.profileRepository.paymentOption = value;
  };

  public setDeliveryMethod = (value: DeliveryType) => {
    this.profileRepository.deliveryOption = value;
  };

  public updateUserProfile = (name: string, address: string, email: string) => {
    this.profileRepository.username = name;
    this.profileRepository.address = address;
    this.profileRepository.email = email;
  };

  public updateDeliveryDetails = (name: string, address: string, phone: string) => {
    this.profileRepository.username = name;
    this.profileRepository.address = address;
    this.profileRepository.phone = phone;
  };
}
