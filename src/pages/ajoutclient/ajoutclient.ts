import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
//

import { FormBuilder, FormArray, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ClientServiceProvider } from '../../providers/client-service/client-service';
import { ClientpagePage } from '../clientpage/clientpage';

/**
 * Generated class for the AjoutclientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajoutclient',
  templateUrl: 'ajoutclient.html',
  providers: [ClientServiceProvider]
})
export class AjoutclientPage {
  form: FormGroup;
  submitAttempt: boolean = false; 
  Cin;
  Nom:AbstractControl;
     
  Prenom;
  Adresse;
  Ville;
  CodePostale;
  Email;
  DateN;
  DateI;
  TelFixe;
  TelMobile;
  Rsociale;
  Numsiret ;
  Numtva;
  Interlocuteur;

 // public form : FormGroup;
 myclient = { Nom: '', Adresse: '', Cin: '', CodePostale: '', DateI: '', DateN: '', Email: '', 
 Interlocuteur: '', NumSiret: '', NumTVA: '', Prenom: '', RaisonSocial: '', TelFixe: '', TelMobile: '', Ville: ''
};
  constructor(private FormBuilder: FormBuilder,public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private _CL : FormBuilder, 
    public ClientServiceProvider :ClientServiceProvider ) {
     
    this.form = FormBuilder.group({
      Cin       	  : ['', Validators.required],
      Nom       	  : ['', Validators.required],
      Prenom       	  : ['', Validators.required],
      Adresse       	  : ['', Validators.required],
      Ville       	  : ['', Validators.required],
      CodePostale       	  : ['', Validators.required],
      Email       	  : ['', Validators.required],
      DateN       	  : ['', Validators.required],
      DateI       	  : ['', Validators.required],
      TelFixe       	  : ['', Validators.required],
      TelMobile       	  : ['', Validators.required],
      Rsociale       	  : ['', Validators.required],
      Numsiret       	  : ['', Validators.required],
      Numtva       	  : ['', Validators.required],
      Interlocuteur       	  : ['', Validators.required],
     
     
      });

      
     
    
  

   this.Nom= this.form.controls['Nom'];
   //this.password = this.form.controls['password'];
  // this.Cin= this.form.controls['Cin'];
  }
 
  saveUser() {
    let IdAvocat=localStorage.getItem("IDClient");

    this.Cin=this.form.value.Cin;
    this.Nom=this.form.value.Nom;
    this.Prenom=this.form.value.Prenom;
    this.Adresse=this.form.value.Adresse;
    this.Ville=this.form.value.Ville;
    this.CodePostale=this.form.value.CodePostale;
    this.Email=this.form.value.Email;
    this.DateN=this.form.value.DateN;
    this.DateI=this.form.value.DateI;
    this.TelFixe=this.form.value.telFixe;
    this.TelMobile=this.form.value.TelMobile;
    this.Rsociale=this.form.value.Rsociale;
    this.Numsiret=this.form.value.Numsiret;
    this.Numtva=this.form.value.Numtva;
    this.Interlocuteur=this.form.value.Interlocuteur;
    this.submitAttempt = true;
    this.ClientServiceProvider.addUser(this.Nom,this.Prenom,this.Cin,this.Adresse,this.TelFixe,this.TelMobile,this.Email,this.DateN,this.DateI,IdAvocat,this.CodePostale,this.Ville,this.Rsociale,this.Numsiret,this.Numtva,this.Interlocuteur).then((result) => {
      
      console.log(result);
      //alert(result)
      if (result) {
        console.log('add ');
        
        this.showConfirm() ;
       // this.navCtrl.pop();
       
             }
    }, (error) => {
      this.showError("Erreur Server !!!! ")
    });
   
  }
  showConfirm() {
    
    let confirm = this.alertCtrl.create({
      title: 'Succes',
      message: 'Ajout se fait avec succes',
      buttons: [
        
        {
          text: 'ok',
          handler: () => {
           
            this.navCtrl.push(ClientpagePage);
          }
        }
      ]
    });
    confirm.present(prompt);
}

showError(text) {

let alert = this.alertCtrl.create({
 title: 'Erreur ',
 subTitle: text,
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutclientPage');
  }/*
  initTechnologyFields() : FormGroup
  {
     return this._CL.group({
      cin 		: ['', Validators.required],
     Nom		: ['', Validators.required],
     Prenom		: ['', Validators.required],
     Adresse		: ['', Validators.required],
     Ville		: ['', Validators.required],
     CodePostale		: ['', Validators.required],
     Email		: ['', Validators.required],
     DateN		: ['', Validators.required],
     DateI		: ['', Validators.required],
     telFixe		: ['', Validators.required],
     TelMobile		: ['', Validators.required],
     Rsociale		: ['', Validators.required],
     Numsiret		: ['', Validators.required],
     Numtva		: ['', Validators.required],
     Interlocuteur		: ['', Validators.required],
     });
  }
*/
/*
  addNewInputField() : void
  {
     const control = <FormArray>this.form.controls.technologies;
     control.push(this.initTechnologyFields());
  }*/
 /* addNewInputField() : void
  {
     const control = <FormArray>this.form.controls.technologies;
     control.push(this.initTechnologyFields());
  }*/
  // Receive the submitted form data
  manage(val : any) : void
  {
     console.dir(val);
  }

}
