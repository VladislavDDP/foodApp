import {User} from '../../model/user';
import {HttpApi} from '../http-api';
import {Auth} from './dto/auth';

const mapToUser = (item: Auth) => {
  const {id, username, email, createdAt, updatedAt} = item.user;
  return new User(id, username, email, createdAt, updatedAt);
};

export class UserApi {
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

  public removeUserToken = () => {
    this.http.removeHeader('Authorization');
  };
}
