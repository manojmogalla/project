import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contactForm:any;
  public onSubmit(){
     console.log(this.contactForm.value);
  }
    constructor() { }
  
    ngOnInit(): void {
     this.contactForm =new FormGroup({
       username: new FormControl("",[Validators.required]),
       password: new FormControl("",[Validators.required])
      })
    }
  
  }