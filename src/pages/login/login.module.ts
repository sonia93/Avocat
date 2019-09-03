import { NgModule, ErrorHandler } from '@angular/core';
import { IonicPageModule, IonicErrorHandler } from 'ionic-angular';
import { LoginPage } from './login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],

providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthServiceProvider]
})

export class LoginPageModule {}
