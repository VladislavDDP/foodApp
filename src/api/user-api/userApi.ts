import {User} from '../../model/user';
import {Reciept} from '../../model/reciept';
import {HttpApi} from '../http-api';
import {Auth} from './dto/auth';
import {OrderIn} from '../food-api/dto/orderIn';
import {injector} from '../../utils/injector/Injector';
import {Configs} from '../../config/configs';
import {Storage} from '../../storage/storage';

const badRequestError = 400;

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

  private http: HttpApi = injector.get<HttpApi>(Configs.Http);
  private storage: Storage = injector.get<Storage>(Configs.AsyncMemory);

  public initAuth = async () => {
    const response = await this.storage.getAuthData();
    if (response.email && response.password) {
      await this.authorizeUser(response.email, response.password);
    }
  };

  public authorizeUser = async (email: string, password: string) => {
    try {
      const response = await this.http.post<Auth>('/auth/local', {
        identifier: email,
        password,
      });
      const user = mapToUser(response);
      const jwt = response.jwt;
      this.user = user;
      return {jwt, user};
    } catch (e) {
      if (e.response.status === badRequestError) {
        throw new Error('Invalid email or password');
      } else {
        throw new Error('Unknown error');
      }
    }
  };

  public registerUser = async (email: string, username: string, password: string) => {
    try {
      const response = await this.http.post<Auth>('auth/local/register', {username, email, password});
      const user = mapToUser(response);
      this.user = user;
      const jwt = response.jwt;
      return {jwt, user};
    } catch (e) {
      if (e.response.status === badRequestError) {
        throw new Error('Email is already taken');
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
        'sort[id]': 'desc',
        populate: '*',
        'filters[users_permissions_user][id][$eq]': id,
      },
    });
    const orders = response.data.map(mapToOrders);
    return orders;
  };
}
