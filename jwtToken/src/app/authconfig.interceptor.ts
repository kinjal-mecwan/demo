import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtAuthService } from './jwt-auth.service';

@Injectable()
export class AuthconfigInterceptor implements HttpInterceptor {

  constructor(private jwtAuthService: JwtAuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.jwtAuthService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
}
}
