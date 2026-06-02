import {Injectable} from '@angular/core';
import {EndPointConstants} from '../constants/end-point-constants';
import {HttpClient} from '@angular/common/http';
import {LoginResponse} from '../../../shared/dtos/Auth/login-response';
import {firstValueFrom} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  readonly httpClient: HttpClient;

  constructor(http: HttpClient) {
    this.httpClient = http;
  }

  async attemptLogin(loginDto: LoginDto): Promise<LoginResponse> {
    let loginResponse: LoginResponse = {
      userName: '',
      token: '',
      tokenExpires: new Date(),
      tokenType: '',
      roles: []
    };
    try {

      loginResponse = await firstValueFrom(
        this.httpClient.post<LoginResponse>(EndPointConstants.LOGIN_URL, loginDto),
      )

    } catch (error) {
      console.error(error);
    }
    return loginResponse;
  }

}
