import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController, ViewController, AlertController } from 'ionic-angular';
import { MypopoverPage } from '../mypopover/mypopover';
import { DetailetatpaiementPage } from '../detailetatpaiement/detailetatpaiement';


/**
 * Generated class for the EtatPaiementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etat-paiement',
  templateUrl: 'etat-paiement.html',
})
export class EtatPaiementPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController, public modalCtrl: ModalController,viewCtrl: ViewController, private alertCtrl: AlertController) {
  }
 
  presentPopover(event) {
    let popover = this.popoverCtrl.create(MypopoverPage);
  
   
    popover.present({
      ev:event
    });

  }/*
  detailetatpaiement(){

   let profileModal = this.modalCtrl.create(DetailetatpaiementPage);
    profileModal.present();
  }
 // public modalCtrl: ModalController,viewCtrl: ViewController, public navParams: NavParams,private alertCtrl: AlertController
 */

  detailetatpaiement(){
    this.navCtrl.push(DetailetatpaiementPage);
  }

}
 

