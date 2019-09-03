import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SeancescontratPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seancescontrat',
  templateUrl: 'seancescontrat.html',
})
export class SeancescontratPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeancescontratPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }

}
