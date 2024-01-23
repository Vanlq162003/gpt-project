import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instance } from '../instance';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  constructor(private http: HttpClient, private instance: Instance) { }

  getOneThread(idThread: string) {
    return this.http.get(`${this.instance.enpoint}/${idThread}`, { headers: this.instance.headers })
  }

  getAllThread() {
    return this.http.get(`${this.instance.enpoint}`, { headers: this.instance.headers })
  }
}
