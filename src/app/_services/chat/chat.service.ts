import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import {Observable} from 'rxjs'
import { ChatRequest } from 'src/app/_interfaces/chatMessage.inteface';
import { Header } from 'src/app/_interfaces/header.interface';
import { AuthService } from '../auth/auth.service';
import { Instance } from '../instance';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private http:HttpClient , private instance: Instance) {}
  createChat( chatRequest:ChatRequest){
    return this.http.post(`${this.instance.enpoint}`, chatRequest , {headers: this.instance.headers} ) 
  }
}
