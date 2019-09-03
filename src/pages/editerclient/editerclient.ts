import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditerclientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editerclient',
  templateUrl: 'editerclient.html',
})
export class EditerclientPage {

  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('myclient');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditerclientPage');
  }

}
