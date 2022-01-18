import {HttpApi} from '../http-api';

interface Auth {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

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
      return response;
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
