import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TweetComponent} from './tweet/tweet.component';
const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component: TweetComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
