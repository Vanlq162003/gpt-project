import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResetPassword, UserData, UserLogin, UserRegister } from 'src/app/_interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,
    private cookieService: CookieService,) { }

  UserData: UserData = {
    accessToken: "",
    refreshToken: "",
    user: {
      _id: "",
      name: "",
      email: ""
    }
  }

  register(UserRegister: UserRegister) {
    return this.http.post(`http://localhost:8001/api/v1/chat_tictip-bot/signup`, UserRegister)
  }

  login(UserLogin: UserLogin) {
    return this.http.post(`http://localhost:8001/api/v1/chat_tictip-bot/login`, UserLogin)
  }

  forgotPassword(email: string) {
    return this.http.get(`http://localhost:8001/api/v1/chat_tictip-bot/forgotPassword?email=${email}`)
  }

  resetPassword(token:string ,  resetPassword:ResetPassword) {
    return this.http.post(`http://localhost:8001/api/v1/chat_tictip-bot/resetPassword/${token}` , resetPassword)
  }

  logout(token:string ,  resetPassword:ResetPassword) {
    return this.http.post(`http://localhost:8001/api/v1/chat_tictip-bot/resetPassword/${token}` , resetPassword)
  }

  getUser() {
    const user = localStorage.getItem("user");
    const userObj = user ? JSON.parse(user) : {};
    this.UserData.user = userObj
    this.UserData.accessToken = this.cookieService.get('accessToken');
    this.UserData.refreshToken = this.cookieService.get('refreshToken');

    return this.UserData
  }

}
