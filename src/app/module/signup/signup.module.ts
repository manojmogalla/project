import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from 'src/app/components/login/login.component';
import { NewaccountComponent } from 'src/app/components/newaccount/newaccount.component';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';



@NgModule({
  declarations: [
    
    NewaccountComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
