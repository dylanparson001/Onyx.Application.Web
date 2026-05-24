import {Injectable} from '@angular/core';
import {UrlConstants} from '../constants/url-constants';
import {HttpClient} from '@angular/common/http';
import {LoginResponse} from '../../../shared/dtos/Auth/LoginResponse';
import {firstValueFrom} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  readonly baseUrl: string;
  readonly loginUrl: string;
  readonly registerUrl: string;
  readonly httpClient: HttpClient;

  constructor(private http: HttpClient) {
    this.baseUrl = UrlConstants.BASE_URL;
    this.loginUrl = this.baseUrl + 'Auth/login';
    this.registerUrl = this.baseUrl + 'Auth/register';
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
        this.httpClient.post<LoginResponse>(this.loginUrl, loginDto),
      )

    } catch (error) {
      console.error(error);
    }
    return loginResponse;
  }

}
