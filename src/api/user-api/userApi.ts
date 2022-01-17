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
  private baseURL: string = 'https://rn-delivery-api.herokuapp.com/api';

  public constructor(http: HttpApi) {
    this.http = http;
    this.http.setBaseURL(this.baseURL);
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

  public setHttpToken = (token: string) => {
    this.http.addHeader('Authorization', `Bearer ${token}`);
  };

  public removeHeaders = () => {
    this.http.cleanHeaders();
  };
}
