import {Component, inject, signal} from '@angular/core';
import {form, FormField} from '@angular/forms/signals';
import {FormsModule} from '@angular/forms';
import {NavManager} from '../../../core/managers/nav-manager';
import {AuthManager} from '../../../core/managers/auth-manager';
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
  private authManager: AuthManager = inject(AuthManager);
  private navManager: NavManager = inject(NavManager);

  loginDto = signal<LoginDto>({username: '', password: ''});
  loginForm = form(this.loginDto)

  protected async attemptLogin() {
    try {

      let loginResponse = await this.authManager.attemptLogin(this.loginDto());

      if (loginResponse) {
        await this.navManager.navigateTo(NavigationPaths.Home)
      }
      this.clearForm()

    } catch (ex) {
      console.log(ex);

    }
  }

  private clearForm() {
    this.loginDto.update(() => ({username: '', password: ''}));
  }
}
