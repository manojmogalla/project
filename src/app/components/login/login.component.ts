import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contactForm:any;
  user: any;
 
 
    constructor(private router:Router) { }
    public  onSubmit(form:any){
      if(form.status ==="INVALID" ){
        return;
      }else{
       this.user=Object.assign(this.user,this.contactForm.value)
      this.addUser(this.user);
      this.contactForm.reset();
      }
    
  }
  addUser(user){
    let users=[];
    if(localStorage.getItem('Users')){
      users=JSON.parse(localStorage.getItem('Users'));
  
      let userpresent=false;
      for(let i=0; i <users.length;i++){
        if(users[i].email=== user.email && users[i].password === user.password){
          userpresent=true;
        }
      }
      if(userpresent){
        this.router.navigateByUrl('/welcome')
      }
      else{
        window.alert("User not found")
      }
    }
  }
  
    ngOnInit(): void {
     this.contactForm =new FormGroup({
       email: new FormControl("",[Validators.required]),
       password: new FormControl("",[Validators.required])
      })
    }
  
  }