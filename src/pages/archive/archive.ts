import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { ArchivecontentieuxPage } from '../archivecontentieux/archivecontentieux';
import { MypopoverPage } from '../mypopover/mypopover';
import { ArchiveconsultationsPage } from '../archiveconsultations/archiveconsultations';
import { ArchivecontratsPage } from '../archivecontrats/archivecontrats';

/**
 * Generated class for the ArchivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archive',
  templateUrl: 'archive.html',
})
export class ArchivePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArchivePage');
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

