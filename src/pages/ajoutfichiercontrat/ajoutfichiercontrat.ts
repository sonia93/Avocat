import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AjoutfichiercontratPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajoutfichiercontrat',
  templateUrl: 'ajoutfichiercontrat.html',
})
export class AjoutfichiercontratPage {

  constructor(public navCtrl: NavController,  public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutfichiercontratPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }

}
