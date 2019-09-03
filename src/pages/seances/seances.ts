import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the SeancesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seances',
  templateUrl: 'seances.html',
})
export class SeancesPage {

  selectedItem: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController,public navParams: NavParams,
     public http: Http) {
    {
      this.selectedItem = navParams.get('MySeances');

   // this.navParams.get('value');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeancesPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }
  
}
