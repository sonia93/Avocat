import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController,Platform  } from 'ionic-angular';
import { DownloadPage } from '../download/download';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { FileTransfer } from '@ionic-native/file-transfer';
/**
 * Generated class for the FacturehistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facturehistory',
  templateUrl: 'facturehistory.html',
})
export class FacturehistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,
    public popoverCtrl: PopoverController,
    private document: DocumentViewer, private file: File, private transfer: FileTransfer, private platform: Platform
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacturehistoryPage');
  }
  
  download(){
    this.navCtrl.push(DownloadPage);
  }
  
  openLocalPdf() {
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
    this.document.viewDocument('assets/5-tools.pdf', 'application/pdf', options);
  }
 
  downloadAndOpenPdf() {
    let path = null;
 
    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else if (this.platform.is('android')) {
      path = this.file.dataDirectory;
    }
 
    const transfer = this.transfer.create();
    transfer.download('https://devdactic.com/html/5-simple-hacks-LBT.pdf', path + 'myfile.pdf').then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', {});
    });
  }
  
}

