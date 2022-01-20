import {User} from '../../model/user';
import {Reciept} from '../../model/reciept';
import {HttpApi} from '../http-api';
import {Auth} from './dto/auth';
import {OrderIn} from '../food-api/dto/orderIn';

const mapToUser = (item: Auth) => {
  const {id, username, email, createdAt, updatedAt} = item.user;
  return new User(id, username, email, createdAt, updatedAt);
};

const mapToOrders = (data: OrderIn) =>
  new Reciept(
    data.id,
    data.attributes.address,
    data.attributes.payment,
    data.attributes.phone,
    data.attributes.delivery_method,
    data.attributes.createdAt,
    data.attributes.items,
  );

export class UserApi {
  public user?: User | null;
  public http: HttpApi;

  public constructor(http: HttpApi) {
    this.http = http;
  }

  public authorizeUser = async (email: string, password: string) => {
    try {
      const response = await this.http.post<Auth>('/auth/local', {
        identifier: email,
        password: password,
      });
      const user = mapToUser(response);
      const jwt = response.jwt;
      this.user = user;
      return {jwt, user};
    } catch (e) {
      if ((e as string) === 'Request failed with status code 400') {
        throw new Error('Invalid email or password');
      } else {
        throw new Error('Unknown error');
      }
    }
  };

  public setUserToken = (token: string) => {
    this.http.addHeader('Authorization', `Bearer ${token}`);
  };

  public setUser = (user: User) => {
    this.user = user;
  };

  public logoutUser = () => {
    this.user = null;
  };

  public removeUserToken = () => {
    this.http.removeHeader('Authorization');
  };

  public getShoppingHistory = async (id: number) => {
    const response = await this.http.get<{data: Array<OrderIn>}>(`/orders`, {
      params: {
        populate: '*',
        'filters[users_permissions_user][id][$eq]': id,
      },
    });
    const orders = response.data.map(mapToOrders);
    return orders;
  };
}
