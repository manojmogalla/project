import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

getUniversityDetails(){
 //return  this.http.get("http://universities.hipolabs.com/search?country=United+States");
}
}
