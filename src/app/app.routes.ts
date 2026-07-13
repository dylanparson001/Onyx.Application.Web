import {Routes} from '@angular/router';
import {LoginComponent} from './features/login/login-component/login-component'
import {HomeComponent} from './features/home/home-component/home-component';
import {AuthGuard} from './core/guards/auth-guard';
import {AuthenticatedLayoutComponent} from './shared/authenticated-layout-component/authenticated-layout-component';
import {AuthInterceptor} from './core/interceptors/auth-interceptor';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full',},
  {path: 'login', component: LoginComponent,},
  {
    path: '',
    component: AuthenticatedLayoutComponent, // This layout contains your navbar
    canActivate: [AuthGuard],               // Protects these routes
    children: [
      {path: 'home', component: HomeComponent},
    ]
  }
];
