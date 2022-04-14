import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 
  details: any;
array=[];
  constructor(
    private router:Router
  ) { }

  
  ngOnInit(): void {
    console.log("hello")
   this.array.push(this.details=JSON.parse(localStorage.getItem('Users')));
   console.log('details',this.details.firstname);
    
  }
  public  onSubmit(){
   
    this.router.navigateByUrl('/newaccount')
  }

}


