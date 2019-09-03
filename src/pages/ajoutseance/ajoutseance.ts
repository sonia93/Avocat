import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AjoutseancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajoutseance',
  templateUrl: 'ajoutseance.html',
})
export class AjoutseancePage {

  constructor(public navCtrl: NavController,  public viewCtrl: ViewController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutseancePage');
  }
  close() {
    this.viewCtrl.dismiss();
  }
}
