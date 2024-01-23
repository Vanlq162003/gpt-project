import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../_services/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class ClientGruard {

    constructor(
        private authService: AuthService
    ) { }

    CanLoadComponentClient() {
        if(this.authService.getUser().accessToken == "" ){
            return true
        }else if(this.authService.getUser().accessToken != ""){
            return false
        }
        return true
    }


}