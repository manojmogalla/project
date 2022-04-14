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
  constructor(private apiServiceService:ApiserviceService){

  }
  ngOnInit(){
   // this.apiServiceService.getUniversityDetails().subscribe((data)=>{
   //   this.users=data;
    //});
  }

}