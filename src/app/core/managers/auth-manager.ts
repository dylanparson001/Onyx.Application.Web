import {AuthService} from '../services/auth-service/auth-service';
import {Injectable} from '@angular/core';
import {LoginResponse} from '../../shared/dtos/Auth/login-response';

@Injectable({providedIn: 'root'})
export class AuthManager {
  constructor(private authService: AuthService) {
  }

  //#region Private Methods
  private setLoginLocal(loginResponse: LoginResponse) {
    try {

      localStorage.setItem('token', loginResponse.token);
      localStorage.setItem('role', loginResponse.roles[0]);
      localStorage.setItem('username', loginResponse.userName);

    } catch (error) {
      console.log(error);
    }
  }

//#endregion

//#region Public Methods
  async attemptLogin(loginDto: LoginDto): Promise<boolean> {

    try {

      let loginResponse = await this.authService.attemptLogin(loginDto);

      if (loginResponse.token != '') {

        this.setLoginLocal(loginResponse);

        return true;
      }
    } catch (error) {
      console.log(error);
    }
    return false;
  }

//#endregion
}
