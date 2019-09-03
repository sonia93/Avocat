import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AjoutrapportcontratPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajoutrapportcontrat',
  templateUrl: 'ajoutrapportcontrat.html',
})
export class AjoutrapportcontratPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutrapportcontratPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }
  
}
