import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPassword } from 'src/app/_interfaces/user.interface';
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  resetPassword: ResetPassword = {
    password : ""
  }
  token: string = ""
  constructor(private authService: AuthService , private router : Router , private route: ActivatedRoute ){
    this.route.paramMap.subscribe((param) => {
      this.token = String(param.get('id'));
    });
  }
  handleResetPassword(){
    this.authService.resetPassword(this.token ,  this.resetPassword).subscribe((res:any)=>{
      alert(res.message)
      this.router.navigate(['login'])
    } , (err:any) =>{ alert(err?.error.message)})
  }
}
