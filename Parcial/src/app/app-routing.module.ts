import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TweetComponent} from './tweet/tweet.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'index', component: TweetComponent},
  {path:'register', component:RegisterComponent},
<<<<<<< HEAD
=======
 
>>>>>>> bcc6d7ccac56f3f9318ce353fd8afaeb98bdfcd6
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
