import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroduceComponent } from './main/introduce/introduce.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChatComponent } from './main/chat/chat.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

const routes: Routes = [
  { path: "", component: IntroduceComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "reset-password/:id", component: ResetPasswordComponent },


  { path: "home", component: ChatComponent},
  {path: 'home/:id', component: ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
