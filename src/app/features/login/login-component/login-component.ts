import {Component, computed, inject, signal} from '@angular/core';
import {delay} from 'rxjs';
import {form, FormField} from '@angular/forms/signals';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../../core/services/auth-service/auth-service';

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

  protected attemptLogin() {
    this.authService.attemptLogin(this.loginDto());

    this.clearForm()
  }

  private clearForm() {
    this.loginDto.update(() => ({username: '', password: ''}));
  }
}
