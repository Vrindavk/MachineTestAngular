import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Loginuser } from '../loginuser';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  isSubmitted = false;
  loginuser:Loginuser;

  constructor(private authService:AuthService,
    private router:Router,
    private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.loginForm=this.formbuilder.group({
      // email:['',Validators.required],
      password:['',Validators.required],
      username: ['', [Validators.required]]

      // password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
    
    
    });
  }

  get formControls(){return this.loginForm.controls}

  login(){
    //console.log(this.loginForm.value);
    //console.log(this.loginForm.controls.email.value);
    //console.log(this.loginForm.controls.password.value);
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      //alert('User form is not valid!!')
      return;
    }
    else
    {
      if(this.loginForm.valid){
        //alert('User form is valid!!')
        
        this.authService.login(this.loginForm.value)
        .subscribe(data => {
              this.loginuser = data;
              console.log(data.roleId);
              
              console.log(data);
              console.log(data.username);
              
              //Role based authentication
              if(data.roleId !=null && data.roleId==1){
                this.isSubmitted  =true;
                this.router.navigateByUrl('/vendorcontactlist');
              }
              else
              {
                window.alert("Wrong username or password");
              }
          // }, (error) => {
          //     console.log(error);
          //     window.alert("Wrong username or password");
          }
        );
      } 
    }
   
    
  }

}
