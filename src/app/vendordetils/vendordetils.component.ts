import { Component, OnInit } from '@angular/core';
import { Vendorcontact } from '../vendorcontact';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorcontactService } from '../vendorcontact.service';

@Component({
  selector: 'app-vendordetils',
  templateUrl: './vendordetils.component.html',
  styleUrls: ['./vendordetils.component.css']
})
export class VendordetilsComponent implements OnInit {

  vendor: Vendorcontact;
  vId: number;
 

  constructor(private  route:ActivatedRoute,private router:Router,
    private vendorService:VendorcontactService) { }

  ngOnInit() {
    this.vendor=new Vendorcontact();
    this.vId=this.route.snapshot.params['vId'];
    this.vendorService.getVendor(this.vId)
    .subscribe(data=>
     { console.log(this.vId)
      console.log(data)
      this.vendor=data;
    },error=>console.log(error));


  }
  list(){
    this.router.navigate(['/vendorcontact']);
  }


}
