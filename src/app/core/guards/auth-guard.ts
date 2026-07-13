import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let token = localStorage.getItem('token');

  if (token != null && token != '') {
    return true; // Navigation allowed
  } else {
    // Redirect to login page and block navigation
    return router.parseUrl('/login');
  }
};
