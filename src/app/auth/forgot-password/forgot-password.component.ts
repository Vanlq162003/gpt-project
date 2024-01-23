import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  email:string = ""

  constructor(private authService: AuthService, private route: Router) {}

  sendMail(){
    this.authService.forgotPassword(this.email).subscribe((res:any)=>{
      alert(res.message)
      this.route.navigate(['login'])
    } , (err:any) =>{ console.log(err)})
  }
}
