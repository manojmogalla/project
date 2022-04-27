import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';


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
    path:"aboutus", component:AboutusComponent
  },
  {
    path:"contactus", component:ContactusComponent
  },
  {
    path:"createaccount", component:CreateaccountComponent
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
