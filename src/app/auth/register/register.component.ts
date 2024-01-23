import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/_interfaces/user.interface';
import { CookieService } from 'ngx-cookie-service';
import { ClientGruard } from 'src/app/_guards/clientProvider';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user: UserRegister = {
    name: "",
    email: "",
    password: ""
  }


  constructor(config: NgbModalConfig,
    private modalService: NgbModal,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private route:Router,
    private cookieService: CookieService,
    private clientguard: ClientGruard 
  ) {

    config.backdrop = 'static';
    config.keyboard = false;

  }

  onClose(data: any) {
    this.modalService.dismissAll()
  }


  open(content: any) {
    this.modalService.open(content);
  }

  register(){
    this.authService.register(this.user)
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
      this.route.navigate(['/home'])
    }
  }


}
