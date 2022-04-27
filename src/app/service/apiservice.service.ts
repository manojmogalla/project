import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

getPatientDetails(){
  const headers=new HttpHeaders()
  .set('ApiKey','B180E86E-5D1A-4403-ABE0-A4030CAC2B5E')
  .set('accept','text/plain')
 return  this.http.get("https://helixapi20211129123604.azurewebsites.net/patients",{'headers': headers});
}

getPatientUniqueDetails(){
  const headers=new HttpHeaders()
.set('ApiKey','B180E86E-5D1A-4403-ABE0-A4030CAC2B5E')
.set('Accept','text/plain')

  return this.http.get("https://helixapi20211129123604.azurewebsites.net/patients/2",{'headers': headers})
}
}
