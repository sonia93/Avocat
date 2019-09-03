import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailetatpaiementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailetatpaiement',
  templateUrl: 'detailetatpaiement.html',
})
export class DetailetatpaiementPage {

  selectedPaiment: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedPaiment = navParams.get('mydetailPaiements');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailetatpaiementPage');
  }

}
