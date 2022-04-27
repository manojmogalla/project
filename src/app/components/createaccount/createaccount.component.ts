import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  public contactForm: FormGroup;
  user:any={};
 

  get lastname() {
    return this.contactForm.get('lastname');
  } 
  get password(){
    return this.contactForm.get('password');
  }
  get confirmpassword(){
    return this.contactForm.get('confirmpassword');
  }
  
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
      if(users[i].email=== user.email){
        userpresent=true;
      }
    }
    if(userpresent){
      window.alert("This email id  already exists")
    }
    users=[user, ...users];
  }else{
    users=[user];
  }
 localStorage.setItem('Users',JSON.stringify(users));
}


ngOnInit(): void {
    this.contactForm= new FormGroup({
        firstname: new FormControl("",[Validators.required,Validators.minLength(6)]),
        lastname: new FormControl("",[Validators.required,Validators.minLength(6)]),
        email: new FormControl("",[Validators.required ]),
        password: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
        confirmpassword: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
        phonenumber: new FormControl("",[Validators.required]),
        age: new FormControl("",[Validators.required]),
        isAdmin: new FormControl()
}, this.passwordMatchingValidator);
}
  
passwordMatchingValidator(fg:FormGroup):Validators{
   return fg.get('password').value === fg.get('confirmpassword').value ? null :
   {notmatched: true};
}



}

