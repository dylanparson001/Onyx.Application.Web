import {HttpInterceptorFn} from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('token');
  if (authToken == null || authToken === '') {
    return next(req);
  }
  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  return next(authReq);
};
