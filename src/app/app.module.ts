import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroduceComponent } from './main/introduce/introduce.component';
import { ChatComponent } from './main/chat/chat.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SidebarComponent } from './_shared/sidebar/sidebar.component';
import { ThreadChatComponent } from './_shared/thread-chat/thread-chat.component';
import { environment } from './_enviroments/enviroment';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';



@NgModule({
  declarations: [
    AppComponent,
    IntroduceComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    ThreadChatComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule ,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
