import {Repository} from '../../api/repository';
import {UserApi} from '../../api/user-api/userApi';
import {Configs} from '../../config/configs';
import {Storage} from '../../storage/storage';
import {injector} from '../../utils/injector/Injector';

export class AuthenticationService {
  private userApi: UserApi = injector.get<UserApi>(Repository.userApi);
  private storage: Storage = injector.get<Storage>(Configs.AsyncMemory);

  public initAuth = async () => {
    const response = await this.storage.getAuthData();
    if (response.email && response.password) {
      await this.userApi.authorizeUser(response.email, response.password);
    }
    return true;
  };
}
