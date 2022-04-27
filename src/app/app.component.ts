import { Component } from '@angular/core';

import { ApiserviceService } from './service/apiservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'miniproject';
  public pageTitle:"HTTP services in angular";
  users:any;
  list:any;
  details: any;
 
  constructor(private apiServiceService:ApiserviceService){

  }
  ngOnInit(){}
 // viewDetail(user:any){
 //console.log(user)
 // }
  getPatientsList(){
    this.apiServiceService.getPatientDetails().subscribe((data)=>{
    this.users=data;
        });
      }
        
        getPatientId(){
          this.apiServiceService.getPatientUniqueDetails().subscribe((data)=>{
          this.details=data;
              });   
  

  }

 displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}



