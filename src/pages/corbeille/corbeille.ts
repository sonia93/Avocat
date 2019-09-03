import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { MypopoverPage } from '../mypopover/mypopover';
import { ArchivecontratsPage } from '../archivecontrats/archivecontrats';
import { ArchiveconsultationsPage } from '../archiveconsultations/archiveconsultations';
import { ArchivecontentieuxPage } from '../archivecontentieux/archivecontentieux';

/**
 * Generated class for the CorbeillePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-corbeille',
  templateUrl: 'corbeille.html',
})
export class CorbeillePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorbeillePage');
  }
  ArchiveContentieux(){
    this.navCtrl.push( ArchivecontentieuxPage) 
    }
    Archivecontrats(){
      this.navCtrl.push( ArchivecontratsPage) 
      }
      Archiveconsultations(){
        this.navCtrl.push( ArchiveconsultationsPage) 
        }
  presentPopover(event) {
    let popover = this.popoverCtrl.create(MypopoverPage);
  
   
    popover.present({
      ev:event
    });
  }

}
