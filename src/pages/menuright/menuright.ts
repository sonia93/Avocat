import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';

/**
 * Generated class for the MenurightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuright',
  templateUrl: 'menuright.html',
})
export class MenurightPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenurightPage');
  }
  openMenu() {
    this.menuCtrl.open();
  }

}
