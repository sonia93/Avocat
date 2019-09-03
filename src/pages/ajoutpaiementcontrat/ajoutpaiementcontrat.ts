import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AjoutpaiementcontratPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajoutpaiementcontrat',
  templateUrl: 'ajoutpaiementcontrat.html',
})
export class AjoutpaiementcontratPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutpaiementcontratPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }

}
