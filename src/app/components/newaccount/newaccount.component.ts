import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/helpers/password-match.validator';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent implements OnInit {

  public contactForm: FormGroup;
public user:any={}
  constructor(
    private router:Router
  ) { }
  
  get lastname() {
    return this.contactForm.get('lastname');
  } 
  get password(){
    return this.contactForm.get('password');
  }
  get confirmpassword(){
    return this.contactForm.get('confirmpassword');
  }
  public  onSubmit(form:any){
    if(form.status ==="VALID" ){
   /* localStorage.setItem('firstname',form.value.firstname);
    localStorage.setItem('lastname',form.value.lastname);
    localStorage.setItem('email',form.value.email);
    localStorage.setItem('date',form.value.date);
    localStorage.setItem('password',form.value.password);
    localStorage.setItem('confirmpassword',form.value.confirmpassword);*/

   localStorage.setItem('Users',JSON.stringify(this.contactForm.value));
   this.router.navigateByUrl('/welcome')
    }
    else{
      window.alert("Please fill the form properly!")
    };
    console.log(this.contactForm.value);
    
  }
  ngOnInit(){
    this.contactForm= new FormGroup({
       firstname: new FormControl("",[Validators.required,Validators.minLength(6)]),
        lastname: new FormControl("",[Validators.required,Validators.minLength(6)]),
        email: new FormControl("",[Validators.required]),
        password: new FormControl("",[Validators.required,Validators.minLength(6)]),
        confirmpassword: new FormControl("",[Validators.required,Validators.minLength(6)]),
        phonenumber: new FormControl("",[Validators.required,Validators.pattern('[- +()0-9]+'),Validators.maxLength(10)]),
        date: new FormControl("",[Validators.required]),
      

        age: new FormControl("",[Validators.required]),
        isAdmin: new FormControl(),
},


  CustomValidators.mustMatch('password', 'confirmpassword')
);

  }
  
}



