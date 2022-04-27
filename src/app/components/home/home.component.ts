import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  users: any;
  list: any;
  details: any;
  viewPatientDetails: boolean;
  searchValue;
  constructor(private apiServiceService: ApiserviceService) {}
  ngOnInit() {
    this.getPatientsList();
  }

  getPatientsList() {
    this.apiServiceService.getPatientDetails().subscribe((data) => {
      this.users = data;
    });
  }

  getPatientId(patientId) {
    this.apiServiceService
      .getPatientUniqueDetails(patientId)
      .subscribe((data) => {
        this.viewPatientDetails=true;
        this.details = data;
      });
  }

  closePopup() {
    this.viewPatientDetails = false;
  }
}
