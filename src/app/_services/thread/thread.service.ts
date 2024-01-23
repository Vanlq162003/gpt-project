import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  constructor(private http: HttpClient) { }

  getOneThread(idThread: string, accessToken: string, _id: string) {
    const headers = new HttpHeaders({
      Authorization: accessToken,
      'x-client-id': _id
    });
    return this.http.get(`http://localhost:8001/api/v1/chat_tictip-bot/assistant/${idThread}`, { headers })
  }

  getAllThread(accessToken: string, _id: string){
    const headers = new HttpHeaders({
      Authorization: accessToken,
      'x-client-id': _id
    });
    return this.http.get(`http://localhost:8001/api/v1/chat_tictip-bot/assistant/`, { headers })
  }
}
