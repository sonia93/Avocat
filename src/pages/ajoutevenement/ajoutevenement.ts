import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AjoutevenementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajoutevenement',
  templateUrl: 'ajoutevenement.html',
})
export class AjoutevenementPage {

  constructor(public navCtrl: NavController,  public viewCtrl: ViewController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutevenementPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }
}
