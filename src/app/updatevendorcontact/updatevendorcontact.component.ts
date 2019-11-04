import { Component, OnInit } from '@angular/core';
import { Vendorcontact } from '../vendorcontact';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorcontactService } from '../vendorcontact.service';
import { VendorcontactlistComponent } from '../vendorcontactlist/vendorcontactlist.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-updatevendorcontact',
  templateUrl: './updatevendorcontact.component.html',
  styleUrls: ['./updatevendorcontact.component.css']
})
export class UpdatevendorcontactComponent implements OnInit {

  vId: number;
  vendor: Vendorcontact;
  editVendorForm:FormGroup;
  

  constructor(private fb: FormBuilder,private route: ActivatedRoute,
    private router: Router,private vendorsService: VendorcontactService) { }

  ngOnInit() {
    this.createForm();
    this.vId=this.route.snapshot.params['vId'];
    console.log("inside update vendor ts --- id is");
    console.log(this.vId);
    this.vendorsService.getVendor(this.vId)
    .subscribe(data=>{
      console.log("inside update vendor TS ")
      console.log(data)
      this.vendor=data;
        },error=>console.log(error));
    
   
  }
  createForm() {
    this.editVendorForm = this.fb.group({
      vName: ['', Validators.required ],
      vAdd: ['', Validators.required ],
      vLoc: ['', Validators.required ],
      vService: ['', Validators.required ],
      vPin: ['', Validators.required ],
      cName: ['', Validators.required ],
      cDep: ['', Validators.required ],
      email: ['', Validators.required ],
      phone: ['', Validators.required ],
           
    });
  }
  onSubmit(){ 
    this.updateVendor();
  }
  updateVendor(){
    //console.log("TS update"+this.vdId+this.vendor);
    this.vendorsService.updateVendor(this.vId,this.vendor)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.vendor=new Vendorcontact();
    this.gotoList();
    
  }
  gotoList(){
    this.vendorsService.getVendors();
    this.router.navigate(['/vendorcontactlist']);
  }



}
