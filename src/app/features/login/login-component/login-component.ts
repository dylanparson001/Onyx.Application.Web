import {Component, computed, inject, signal} from '@angular/core';
import {delay} from 'rxjs';
import {form, FormField} from '@angular/forms/signals';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../../core/services/auth-service/auth-service';
import {LoginResponse} from '../../../shared/dtos/Auth/LoginResponse';

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
  loginDto = signal<LoginDto>({username: '', password: ''});
  private authService: AuthService = inject(AuthService);
  loginForm = form(this.loginDto)

  protected async attemptLogin() {
    let loginResponse = await this.authService.attemptLogin(this.loginDto());
    console.log(loginResponse);
    if (loginResponse.userName != '') {
      // Navigate to dashboard
       console.log('Login Successful')
    }

    this.clearForm()
  }

  private clearForm() {
    this.loginDto.update(() => ({username: '', password: ''}));
  }
}
