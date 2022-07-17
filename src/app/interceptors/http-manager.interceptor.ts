import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {TokenService} from "../services/token.service";

@Injectable()
export class HttpManagerInterceptor implements HttpInterceptor {

  constructor(private tokenService:TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token=this.tokenService.getToken();
    if(token){
      request=request.clone({
        setHeaders:{Authorization:token}
      });
    }
    return next.handle(request).pipe(
      finalize(()=>{
        console.log('Sent !');
      })
    );
  }
}
