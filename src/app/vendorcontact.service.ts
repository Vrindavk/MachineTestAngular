import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendorcontact } from './vendorcontact';

@Injectable({
  providedIn: 'root'
})
export class VendorcontactService {

  baseUrl = 'http://localhost:8585/MachineTest1/api';
  vId:number;
  constructor(private http: HttpClient) { }
  getVendors() {
    return this.http.get<Vendorcontact[]>(this.baseUrl+'/vendordetails');
  }

  getVendor(vId:number):Observable<any> {
    console.log("inside get vendor  service");
    console.log(vId);
    return this.http.get(this.baseUrl+'/vendorbyid/'+vId);
    
  }

  updateVendor(vId: number, vendor: Vendorcontact): Observable<any> {
  
    return this.http.put(this.baseUrl+'/updatevendor/'+vId,vendor);
  }
  createVendor(vendor: Vendorcontact): Observable<Object> {

    console.log(vendor);
    return this.http.post(this.baseUrl+'/insertvendorcontact', vendor);
    
  }
  deleteVendor(vId: number,  vendor:Vendorcontact): Observable<any> {

    return this.http.put(this.baseUrl+'/disablevendor/'+vId, vendor);
  }
  search(searchString:String):Observable<Vendorcontact[]>
  {
return this.http.get<Vendorcontact[]>(this.baseUrl+'/vendordetails/'+searchString);
  }
  
  

}
