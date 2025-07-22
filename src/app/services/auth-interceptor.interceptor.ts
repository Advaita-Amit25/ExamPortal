import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private login:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//  Add Jwt Token
            let authReq = request;
            console.log("interceptor chal raha hai ")
            const token = this.login.getToken();
            console.log("interceptor chal raha hai ")
            if(token!=null){
                authReq = authReq.clone({
                    setHeaders:{Authorization: `Bearer ${token}`},
                }) ;
            }
            return next.handle(authReq);
  }
}

export const authInterceptorProviders =[
  {
    provider:HTTP_INTERCEPTORS,
    useClass: AuthInterceptorInterceptor,
    multi:true,
  }
]

// import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
// import { LoginService } from "./login.service";

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor{
// constructor(private login:LoginService){}
//     intercept(
//         req: HttpRequest<any>, 
//         next: HttpHandler
//         ): Observable<HttpEvent<any>> {
//             // Add Jwt Token
//             let authReq = req;
//             const token = this.login.getToken();
//             console.log("interceptor chal raha hai ")
//             if(token!=null){
//                 authReq = authReq.clone({
//                     setHeaders:{Authorization: `Bearer ${token}`},
//                 }) ;
//             }
//             return next.handle(authReq);
//     }

// }

// export const authInterceptorProviders = [
//     {
//         provider: HTTP_INTERCEPTORS,
//         useClass : AuthInterceptor,
//         multi: true 
//     }
// ]
