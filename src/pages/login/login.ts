import {Component, OnInit} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController, LoadingController} from "ionic-angular";
import { TransformProvider } from './../../providers/transform/transform';
import { map } from 'rxjs/operators/map';
import {SideMenuPage} from "../menu/menu";
import { InscriptionPage } from "../inscription/inscription";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
//import { IonicPage } from "ionic-angular/navigation/ionic-page";
//import {RegisterPage} from "../register/register";
import { ActionSheetController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import * as xml2js from 'xml2js';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

/*@IonicPage{
  LoginPage ;
}*/
export class LoginPage {
  loading: any;
  formgroup:FormGroup;
  email:AbstractControl;
  password:AbstractControl;
  isLoggedIn: boolean = false;
  //parameters: any;
data:any;
  submitAttempt: boolean = false;


 
  constructor(public nav: NavController,
    private alertCtrl: AlertController,
      public menu: MenuController, 
      public toastCtrl: ToastController,
      public formbuilder:FormBuilder,
      public authService: AuthServiceProvider,
      public transformProvider: TransformProvider,
      public loadingCtrl: LoadingController) {
        this.formgroup = formbuilder.group({
          //email1:['', [Validators.required, Validators.minLength(3),,Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]],
          email:['', [Validators.required]],
          password:['', [Validators.required]]
        });
  
        this.email= this.formgroup.controls['email'];
        this.password = this.formgroup.controls['password'];
        
   
    
        if(localStorage.getItem("token")) {
          this.isLoggedIn = true;
        }
    
    
        }
  
      
          
    //this.menu.swipeEnable(true);
   // this.menu.enable(false);
 
  
 /*
   loginData = { username:'', password:'' };
   data: any;*/

  // login and go to home page
  login() {
    //this.showLoader();
    //this.menu.getMenus;
   // this.menu.enable(false);
   this.submitAttempt = true;
   
   if (this.formgroup.valid) {


    console.log("email",this.formgroup.value.email);
    console.log("password",this.formgroup.value.password);

   
    this.authService.LoginAvocanet(this.formgroup.value.email,this.formgroup.value.password).then(result => {
      
    
      this.data= result;
     
      console.log(this.data);
     // alert(this.data.Id);
     

    //  alert(this.data.Id)
    if( this.data)
    {
    if (this.data.Id == null)
      {
        this.showError();
      }
      
      else
      { //alert(this.data.Id )
        localStorage.setItem("IDClient",this.data.Id );
        this.nav.setRoot(SideMenuPage); 
      }

    }
    }, error => {
     
     this.showErrorserver();
    });
    
      
    }  
    
   
  }

 /*
  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }
  
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }*/
  showErrorserver() {
    //this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Ereur',
      subTitle: 'Erreur serveur',
      buttons: [
        {
          text: 'Ok',
          role: 'Ok',
          handler: data => {
          }
        }]
    });
    alert.present(prompt);
  }
  showError() {
    //this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Veuillez entrer un login et une mot de passe valide !',
      buttons: [
        {
          text: 'Ok',
          role: 'Ok',
          handler: data => {
          }
        }]
    });
    alert.present(prompt);
  }

  forgotPass() {
    let forgot = this.alertCtrl.create({
      title: 'Mot de passe oublié ?',
      message: "Entrez votre Email.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],


      
      buttons: [
        {
          text: 'Fermer',
          handler: data => {
            console.log('close clicked');
          }
        },
        {
          text: 'Envoyer',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: "L' email a été envoyé avec succès",
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }
  inscription(){
    this.nav.push( InscriptionPage);
    
    }
   
  
}
