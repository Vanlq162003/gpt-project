import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import {Observable} from 'rxjs'
import { ChatRequest } from 'src/app/_interfaces/chatMessage.inteface';
import { Header } from 'src/app/_interfaces/header.interface';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient) { }

  createChat( chatRequest:ChatRequest , accessToken:string , _id:string){
    const headers = new HttpHeaders({
      Authorization: accessToken, 
      'x-client-id' : _id  
    });
    return this.http.post(`http://localhost:8001/api/v1/chat_tictip-bot/assistant`, chatRequest , {headers} ) 
  }
}
