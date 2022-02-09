import {makeAutoObservable} from 'mobx';

import {FoodApi} from '../api/food-api/food-api';
import {Repository} from '../api/repository';
import {UserApi} from '../api/user-api/userApi';
import {OrderDetails} from '../model/orderDetails';
import {Reciept} from '../model/reciept';
import {injector} from '../utils/injector/Injector';

export class HistoryStore {
  public orders: Array<Reciept> = [];

  private userApi: UserApi = injector.get<UserApi>(Repository.userApi);
  private foodApi: FoodApi = injector.get<FoodApi>(Repository.foodApi);

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public getShoppingHistory = async () => {
    const id = this.userApi.user?.id;
    if (id) {
      const response = await this.userApi.getShoppingHistory(id);
      this.orders = response.reverse();
    }
  };

  public appendHistory = async (item: OrderDetails) => {
    if (this.userApi.user) {
      try {
        const receipt = await this.foodApi.purchaseFood(item, this.userApi.user?.id);
        this.orders.unshift(receipt);
        return true;
      } catch (e) {
        throw new Error('User not auth');
      }
    }
    return false;
  };
}
