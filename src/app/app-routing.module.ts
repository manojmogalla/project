import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewaccountComponent } from './components/newaccount/newaccount.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  
  {
    path:"", component:HomeComponent
  },
  {
    path:"home", component:HomeComponent
  },
  
  {
    path:"newaccount",  component:NewaccountComponent
  },
  {
    path:"login",  component:LoginComponent
  },
  {
    path:"welcome",  component:WelcomeComponent
  },
 /* {
    path:"orders",
    loadChildren: () =>import('./module/signup/signup.module').then(m =>m.SignupModule)
  }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
