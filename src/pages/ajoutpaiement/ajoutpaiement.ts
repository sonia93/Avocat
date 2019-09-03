import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AjoutpaiementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajoutpaiement',
  templateUrl: 'ajoutpaiement.html',
})
export class AjoutpaiementPage {

  constructor(public navCtrl: NavController,  public viewCtrl: ViewController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutpaiementPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }
}
