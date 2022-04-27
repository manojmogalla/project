import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
/*checkEmail(event){
const users=JSON.parse(localStorage.getItem('Users'))
const checkEmailDuplicate=(obj) => obj.email ===event.target.value;

console.log(users.some(checkEmailDuplicate));
if(users.some(checkEmailDuplicate)){
  this.showError=true;
}
}*/