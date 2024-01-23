import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { AuthService } from './auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class Instance {

  headers = new HttpHeaders({
    Authorization: this.authService.getUser().accessToken, 
    'x-client-id' :this.authService.getUser().user._id  
  });

  enpoint: string = "http://localhost:8001/api/v1/chat_tictip-bot/assistant" 
  
  constructor(private authService: AuthService) {}


}
