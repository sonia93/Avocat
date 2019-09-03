import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform  } from 'ionic-angular';
//

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
//pdfMake.vfs = pdfFonts.pdfMake.vfs;
 
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
/**
 * Generated class for the DownloadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-download',
  templateUrl: 'download.html',
})
export class DownloadPage {
 /* letterObj = {  
    ref:"",
    designation: '',
    tva : '',
    total:'',
    ttc: '',
    text:'',
    ht : '',
    tv:'',
    tt: '',
  }
 
  pdfObj = null;*/
  constructor(public navCtrl: NavController, public navParams: NavParams,private plt: Platform, private file: File, private fileOpener: FileOpener) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloadPage');
  }/*
  createPdf() {
    var docDefinition = {
      content: [
        { text: 'Adresse : Rue Jean Rousse',alignment: 'right' },
        { text: 'Tél 1 : 96540027 ',alignment: 'right' },
        { text: 'Tél 2 : 92841579',alignment: 'right' },
        { text: 'Email : Sona.Mrissa1@gmail.com',alignment: 'right' },
        { text: 'NumTVA :',alignment: 'right' },
       
        { text: 'REMINDER', style: 'header' },
        { text: 'sonia' },
        { text: 'CIN: 09366758'},
        { text: 'Monestir'},
        { text: 'Tél : 98774524' },
       
        { text: 'Pro-format Client FCT-2503-2018',alignment: 'center' ,style: 'subheader'},
      { text: new Date().toTimeString(), alignment: 'right' },*/
 /*
        { text: 'Réf   '},
        { text: this.letterObj.ref },
        { text: ' Désignation  '},
        { text: this.letterObj.designation  },
        { text: '  Total HT '},
        { text: this.letterObj.total },
        { text: 'TVA '},
        { text: this.letterObj.tva },
        { text: ' Total TTC '},
        { text: this.letterObj.ttc },
        
 
        { text: 'Total HT' },
        this.letterObj.ht,
        { text: 'Total TVA' },
        this.letterObj.tv,
        { text: 'Total TTC'},
        this.letterObj.tt,
 
        { text: this.letterObj.text, style: 'story', margin: [0, 20, 0, 20] },
 
     
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        }
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
  }
 
  downloadPdf() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
 
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }
 */
}


