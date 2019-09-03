import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AjoutrapportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajoutrapport',
  templateUrl: 'ajoutrapport.html',
})
export class AjoutrapportPage {

  constructor(public navCtrl: NavController,   public viewCtrl: ViewController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutrapportPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }
}
