import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ClientGruard } from 'src/app/_guards/clientProvider';
import { UserLogin } from 'src/app/_interfaces/user.interface';

import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: UserLogin = {
    email: "",
    password: ""
  }
  constructor(
    private authService: AuthService,
    private route:Router,
    private cookieService: CookieService,
    private clientguard : ClientGruard,
  ) {}

  signin(){
    this.authService.login(this.user)
    .subscribe((res: any) => {
      localStorage.setItem('user', JSON.stringify(res.metadata.user));
      this.cookieService.set("accessToken", res.metadata.tokens.accessToken);
      this.cookieService.set("refreshToken", res.metadata.tokens.refreshToken);
      alert(res.message);
      this.route.navigate(['/home']);
    }, (err: any) => {
      alert(err?.error.message)   
    });
  }

  ngOnInit(){
    if(this.clientguard.CanLoadComponentClient() == false){
      this.route.navigate(['home'])
    }
  }


}
