import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { LoginComponent } from './login/login.component';


import { HttpClientModule } from '@angular/common/http';
import { SwapiFilmsService } from './services/swapi-films.service';
import { RegisterComponent } from './register/register.component';
import { BackService } from './services/back.service';


@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [SwapiFilmsService,BackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
