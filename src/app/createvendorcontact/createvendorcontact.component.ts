import { Component, OnInit } from '@angular/core';
import { Vendorcontact } from '../vendorcontact';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendorcontactService } from '../vendorcontact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-createvendorcontact',
  templateUrl: './createvendorcontact.component.html',
  styleUrls: ['./createvendorcontact.component.css']
})
export class CreatevendorcontactComponent implements OnInit {

  vendor: Vendorcontact = new Vendorcontact();
  submitted = false;
  addvendorForm: FormGroup;
  

  constructor(private fb: FormBuilder,private vendorService: VendorcontactService,
    private router: Router,private route: ActivatedRoute) { }

    vendors:Observable<Vendorcontact[]>;
    

  ngOnInit() {
    this.createForm();
    
    
  }

  createForm() {
    this.addvendorForm = this.fb.group({
      vName: ['', Validators.required ],
      vAdd: ['', Validators.required ],
      vLoc: ['', Validators.required ],
      vService: ['', Validators.required ],
      vpin: ['', Validators.required ],
      cName: ['', Validators.required ],
      cdep: ['', Validators.required ],
      email: ['', Validators.required ],
      phone: ['', Validators.required ],


      
    });
  }

  onSubmit() {
    this.submitted = true;
    this.vendor = new Vendorcontact();
    this.vendor.vName=this.addvendorForm.controls.vName.value;
    this.vendor.vAdd=this.addvendorForm.controls.vAdd.value;
    this.vendor.vLoc=this.addvendorForm.controls.vLoc.value;
    this.vendor.vService=this.addvendorForm.controls.vService.value;
    this.vendor.vPin=this.addvendorForm.controls.vpin.value;
    this.vendor.cName=this.addvendorForm.controls.cName.value;
    this.vendor.cDep=this.addvendorForm.controls.cdep.value;
    this.vendor.email=this.addvendorForm.controls.email.value;
    this.vendor.phone=this.addvendorForm.controls.phone.value;


    console.log("after create vendor:   ---- ");
    console.log(this.vendor)
      this.save();
    
       

  }
  
  
  newAsset(): void {
  this.submitted = false;
  this.vendor = new Vendorcontact();
  }

 save(){
  console.log(this.vendor);
   this.vendorService.createVendor(this.vendor)
   .subscribe(data => console.log(data), error => console.log(error));
   this.vendorService.getVendors();
   this.gotoList();
   
   
 }
 
 gotoList(){
   this.vendors = this.vendorService.getVendors();
   this.vendorService.getVendors();
   this.router.navigate(['/vendorcontactlist']);
 }
}
