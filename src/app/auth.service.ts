import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loginuser } from './loginuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService:HttpClient) { }
    
  public login(userInfo:Loginuser){
    localStorage.setItem('ACCESS_TOKEN',"access_token");
    localStorage.setItem('UserID',userInfo.username);
    return this.httpService.get<Loginuser>(environment.apiUrl+'/logindetails/'+userInfo.username)
  }
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN')!==null
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
  public reserve(){
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }
}
