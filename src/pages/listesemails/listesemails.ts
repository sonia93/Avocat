import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { MypopoverPage } from '../mypopover/mypopover';
import { DetailemailPage } from '../detailemail/detailemail';

/**
 * Generated class for the ListesemailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listesemails',
  templateUrl: 'listesemails.html',
  

})

export class ListesemailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListesemailsPage');
  }
  presentPopover(event) {
    let popover = this.popoverCtrl.create(MypopoverPage);
  
   
    popover.present({
      ev:event
    });
  }
  Detailemail(){
    this.navCtrl.push(DetailemailPage);
  }

}
