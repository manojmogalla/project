import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from 'src/app/components/login/login.component';
import { NewaccountComponent } from 'src/app/components/newaccount/newaccount.component';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '' , component:NewaccountComponent 
  },
  {
    path: 'newaccount' , component:NewaccountComponent 
  },
  {
    path: 'login' , component:LoginComponent 
  },
  {
    path: 'welcome' , component:WelcomeComponent 
  }
  
];
@NgModule({
  declarations: [],
  imports: 
    [RouterModule.forChild(routes)]
  
})
export class SignupRoutingModule { }
