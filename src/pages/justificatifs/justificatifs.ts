import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';
import { PopoverjustificatifsPage } from '../popoverjustificatifs/popoverjustificatifs';

/**
 * Generated class for the JustificatifsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-justificatifs',
  templateUrl: 'justificatifs.html',
})
export class JustificatifsPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JustificatifsPage');
  }
  //
     //
     Popoverjustificatifs(event) {
      let popover = this.popoverCtrl.create(PopoverjustificatifsPage);
    
     
      popover.present({
        ev:event
      });
    }
 /* Listevenementsvenir(event) {
    let popover = this.popoverCtrl.create(ListevenementsvenirPage);
  
   
    popover.present({
      ev:event
    });
  }*/

  close() {
    this.viewCtrl.dismiss();
  }

}
