import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PaiementscontratPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paiementscontrat',
  templateUrl: 'paiementscontrat.html',
})
export class PaiementscontratPage {
  

  constructor(public navCtrl: NavController,public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaiementscontratPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }
 
  

}
