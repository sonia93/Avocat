import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,PopoverController,AlertController} from 'ionic-angular';
import { MypopoverPage } from '../mypopover/mypopover';

/**
 * Generated class for the AproposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apropos',
  templateUrl: 'apropos.html',
})
export class AproposPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AproposPage');
  }
  presentPopover(event) {
    let popover = this.popoverCtrl.create(MypopoverPage);
  
   
    popover.present({
      ev:event
    });
  }
}
