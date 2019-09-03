import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AjoutfichierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajoutfichier',
  templateUrl: 'ajoutfichier.html',
})
export class AjoutfichierPage {

  constructor(public navCtrl: NavController,  public viewCtrl: ViewController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutfichierPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }
  
}
