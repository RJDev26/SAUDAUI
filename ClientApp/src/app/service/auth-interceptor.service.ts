import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Retrieve the authorization token from your authentication service
    const authToken = localStorage.getItem('token');

    // Clone the request and add the Authorization header
    const authReq = req.clone({
      setHeaders: { Authorization: `${authToken}` },
    });

    // Pass the cloned request to the next handler
    return next.handle(authReq);
  }
}
