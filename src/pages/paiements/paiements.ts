import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PaiementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paiements',
  templateUrl: 'paiements.html',
})
export class PaiementsPage {

  constructor(public navCtrl: NavController,  public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaiementsPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }
 
}
