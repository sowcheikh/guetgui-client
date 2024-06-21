import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {BergerService} from "./services/berger.service";
import {AnimalService} from "./services/animal.service";
import {ErrorInterceptor} from "./interceptor/error.interceptor";
import {httpInterceptor} from "./interceptor/http.interceptor";



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [AuthService, BergerService, AnimalService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true}

  ]
})
export class CoreModule { }
