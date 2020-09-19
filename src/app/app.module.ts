import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptors } from './interceptors/error.interceptors';
import { LoadingInterceptors } from './interceptors/loading.interceptors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptors, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptors, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
