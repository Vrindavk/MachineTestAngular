import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VendorcontactlistComponent } from './vendorcontactlist/vendorcontactlist.component';
import { VendordetilsComponent } from './vendordetils/vendordetils.component';
import { CreatevendorcontactComponent } from './createvendorcontact/createvendorcontact.component';
import { UpdatevendorcontactComponent } from './updatevendorcontact/updatevendorcontact.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VendorcontactlistComponent,
    VendordetilsComponent,
    CreatevendorcontactComponent,
    UpdatevendorcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
