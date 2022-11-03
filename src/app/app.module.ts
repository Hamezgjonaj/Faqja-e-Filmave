import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { LogInComponent } from './Home/log-in/log-in.component';
import { RegisterComponent } from './Home/register/register.component';
import { BannerComponent } from './movies/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    BannerComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
