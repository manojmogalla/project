import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupModule } from './module/signup/signup.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { CustomPipe } from './pipes/custom.pipe';
import { ApiserviceService } from './service/apiservice.service';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { AgGridModule } from 'ag-grid-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomPipe,
    AboutusComponent,
    CreateaccountComponent,
    ContactusComponent
    
    
    
],
  imports: [
BrowserModule,
AgGridModule.withComponents([]),
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    
    HttpClientModule,
    ReactiveFormsModule,
    SignupModule,
    
    
    
    

  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
