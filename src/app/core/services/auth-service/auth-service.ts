import {Injectable} from '@angular/core';
import {UrlConstants} from '../constants/url-constants';
import {HttpClient} from '@angular/common/http';
import {LoginResponse} from '../../../shared/dtos/Auth/LoginResponse';

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

  attemptLogin(loginDto: LoginDto) {

    try {
      this.httpClient.post<LoginResponse>(this.loginUrl, loginDto).subscribe({
        next: result => {
          console.log(result.username)
          console.log(result.token)

        },
        error: result => {
          console.log(result)
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

}
