import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VendorcontactService } from '../vendorcontact.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Vendorcontact } from '../vendorcontact';

@Component({
  selector: 'app-vendorcontactlist',
  templateUrl: './vendorcontactlist.component.html',
  styleUrls: ['./vendorcontactlist.component.css']
})
export class VendorcontactlistComponent implements OnInit {

  vendors: Observable<Vendorcontact[]>
  vId:number;

  constructor(private vendorService: VendorcontactService, private authservice: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    console.log("reloadData");
    this.vendors = this.vendorService.getVendors();
    console.log(this.vendors);
  }

  

  deleteVendor(vId: number,vendorcontact:Vendorcontact){

    this.vendorService.deleteVendor(vId,vendorcontact)
    .subscribe(
      data => {
          console.log(data);
          this.reloadData();
      },
      error => {
          console.log(error);
      });

  }

  vendorDetails(vId: number){
    console.log(vId);
    this.router.navigate(['/vendorbyid',vId]);
  }


  
  updateVendor(vId:number){
    console.log(vId);
    this.router.navigate(['/updatevendor',vId]);
  }

  searchString:String;
  search(searchString){
    console.log(searchString);
    if(searchString!=null){
      this.vendors=this.vendorService.search(this.searchString);
    }
    else{
      console.log("Else:"+searchString);
      this.reloadData();
    }
  }
  

  public logout(){
    this.authservice.logout();
    this.router.navigateByUrl('/login');
  }


}
