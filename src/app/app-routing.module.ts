import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VendorcontactlistComponent } from './vendorcontactlist/vendorcontactlist.component';
import { AuthGuard } from './auth.guard';
import { VendordetilsComponent } from './vendordetils/vendordetils.component';
import { CreatevendorcontactComponent } from './createvendorcontact/createvendorcontact.component';
import { UpdatevendorcontactComponent } from './updatevendorcontact/updatevendorcontact.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:'vendorcontactlist',component:VendorcontactlistComponent,canActivate:[AuthGuard]},
  {path:'vendorid/:vId',component:VendordetilsComponent,canActivate:[AuthGuard]},
  {path:'insertvendorcontact',component:CreatevendorcontactComponent,canActivate:[AuthGuard]},
  {path:'updatevendor/:vId',component:UpdatevendorcontactComponent,canActivate:[AuthGuard]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
