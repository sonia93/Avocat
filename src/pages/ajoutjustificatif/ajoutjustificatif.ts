import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AjoutjustificatifPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajoutjustificatif',
  templateUrl: 'ajoutjustificatif.html',
})
export class AjoutjustificatifPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutjustificatifPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }
}
