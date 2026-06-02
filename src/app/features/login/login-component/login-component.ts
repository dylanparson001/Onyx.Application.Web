import {Component, computed, inject, signal} from '@angular/core';
import {delay} from 'rxjs';
import {form, FormField} from '@angular/forms/signals';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../../core/services/auth-service/auth-service';
import {LoginResponse} from '../../../shared/dtos/Auth/login-response';
import {NavManager} from '../../../core/managers/nav-manager';
import {NavigationPaths} from '../../../shared/enums/navigation-paths';

@Component({
  selector: 'app-login-component',
  imports: [
    FormField,
    FormsModule
  ],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  private authService: AuthService = inject(AuthService);
  private navManager: NavManager = inject(NavManager);

  loginDto = signal<LoginDto>({username: '', password: ''});
  loginForm = form(this.loginDto)

  protected async attemptLogin() {
    try {

      let loginResponse = await this.authService.attemptLogin(this.loginDto());
      console.log(loginResponse);
      if (loginResponse.token != '') {

        localStorage.setItem('token', loginResponse.token);
        localStorage.setItem('token', loginResponse.token);
        await this.navManager.navigateTo(NavigationPaths.Home)

      }

      this.clearForm()

    } catch (ex) {

    }
  }

  private clearForm() {
    this.loginDto.update(() => ({username: '', password: ''}));
  }
}
