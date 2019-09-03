import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FacturehistoryPage } from '../facturehistory/facturehistory';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  alertModifier() {
    let alert = this.alertCtrl.create({
      title: 'Nom',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'nom',
          placeholder: 'Nom'
        }
       
      ],
      buttons: [
        {
          text: 'Valider',
          role: 'Valider',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Fermer',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
  alertModifierprenom() {
    let alert = this.alertCtrl.create({
      title: 'Prénom',
      inputs: [
        {
          name: 'prenom',
          placeholder: 'Prénom'
        }
       
      ],
      buttons: [
        {
          text: 'Valider',
          role: 'Valider',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Fermer',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }

  alertModifierEmail() {
    let alert = this.alertCtrl.create({
      title: 'Email',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        }
       
      ],
      buttons: [
        {
          text: 'Valider',
          role: 'Valider',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Fermer',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
  alertModifierLogin() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'login',
          placeholder: 'Login'
        }
       
      ],
      buttons: [
        {
          text: 'Valider',
          role: 'Valider',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Fermer',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
  alertModifierMotdepasse() {
    let alert = this.alertCtrl.create({
      title: 'Mot de passe',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'Motdepasse',
          placeholder: 'Mot de passe'
        }
       
      ],
      buttons: [
        {
          text: 'Valider',
          role: 'Valider',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Fermer',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
  //Adresse  Télèphone Fax   Prefixe Cas    Prefixe Contrat    CodeTVA    Registre de commerce    Prefixe User 

  alertModifierAdresse() {
    let alert = this.alertCtrl.create({
      title: 'Adresse',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'Adresse',
          placeholder: 'Adresse'
        }
       
      ],
      buttons: [
        {
          text: 'Valider',
          role: 'Valider',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Fermer',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
  alertModifierTelephone() {
    let alert = this.alertCtrl.create({
      title: 'Télèphone  ',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'tlfixe',
          placeholder: 'Télèphone '
        }
       
      ],
      buttons: [
        {
          text: 'Valider',
          role: 'Valider',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Fermer',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
  alertModifierTelfixe() {
    let alert = this.alertCtrl.create({
      title: 'Télèphone Fax ',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'tlfixe',
          placeholder: 'Télèphone Fax '
        }
       
      ],
      buttons: [
        {
          text: 'Valider',
          role: 'Valider',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Fermer',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
  alertModifierPrefixeCas() {
    let alert = this.alertCtrl.create({
      title: 'Prefixe Cas ',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'PrefixeCas ',
          placeholder: 'Prefixe Cas '
        }
       
      ],
      buttons: [
        {
          text: 'Valider',
          role: 'Valider',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Fermer',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
  alertModifierPrefixeContrat() {
    let alert = this.alertCtrl.create({
      title: 'Prefixe Contrat ',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'PrefixeContrat ',
          placeholder: 'Prefixe Contrat '
        }
       
      ],
      buttons: [
        {
          text: 'Valider',
          role: 'Valider',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Fermer',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
  alertModifierPrefixeConsultation() {
    let alert = this.alertCtrl.create({
      title: 'Prefixe Consultation ',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'PrefixeConsultation ',
          placeholder: 'Prefixe Consultation '
        }
       
      ],
      buttons: [
        {
          text: 'Valider',
          role: 'Valider',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Fermer',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
  alertModifierCodeTVA() {
    let alert = this.alertCtrl.create({
      title: 'CodeTVA',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'CodeTVA',
          placeholder: 'CodeTVA'
        }
       
      ],
      buttons: [
        {
          text: 'Valider',
          role: 'Valider',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Fermer',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
  alertModifierRegistredecommerce() {
    let alert = this.alertCtrl.create({
      title: 'Registre de commerce',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'Registredecommerce',
          placeholder: 'Registre de commerce'
        }
       
      ],
      buttons: [
        {
          text: 'Valider',
          role: 'Valider',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Fermer',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
  alertModifierTauxTVA() {
    let alert = this.alertCtrl.create({
      title: 'TauxTVA',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'TauxTVA',
          placeholder: 'TauxTVA'
        }
       
      ],
      buttons: [
        {
          text: 'Valider',
          role: 'Valider',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Fermer',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
  alertModifierPrefixeUser() {
    let alert = this.alertCtrl.create({
      title: 'Nom',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'PrefixeUser',
          placeholder: 'Prefixe User'
        }
       
      ],
      buttons: [
        {
          text: 'Valider',
          role: 'Valider',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Fermer',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
  alertModifierTempleteEmailAjout() {
    let alert = this.alertCtrl.create({
      title: 'Templete Email Ajout',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'TempleteEmailAjout',
          placeholder: 'Templete Email Ajout'
        }
       
      ],
      buttons: [
        {
          text: 'Valider',
          role: 'Valider',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Fermer',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
  alertModifierTempleteEmailEdit() {
    let alert = this.alertCtrl.create({
      title: 'Templete Email Edit',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'TempleteEmailEdit',
          placeholder: 'Templete Email Edit'
        }
       
      ],
      buttons: [
        {
          text: 'Valider',
          role: 'Valider',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Fermer',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
  

  listeFecture(){
    this.navCtrl.push( FacturehistoryPage);
  }
}
