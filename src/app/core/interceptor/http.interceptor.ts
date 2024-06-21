import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import {AuthService} from "../services/auth.service";
export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const authenticationService = inject(AuthService);
  let token = authenticationService.getToken();
  console.log('token', token);

  let authReq = req; // Déclarez authReq en dehors du bloc if
  if (token != null) {
    console.log('yessssss')
    // Pour back-end Node.js Express
    // authReq = req.clone({ headers: req.headers.set(TOKEN_KEY, token) });

    // Pour back-end Spring Boot, décommentez la ligne suivante et commentez la ligne ci-dessus
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*'
      },
    });
  }

  return next(authReq);
};
