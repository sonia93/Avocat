import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AjoutcontratsPage } from '../ajoutcontrats/ajoutcontrats';
import { DetailcontratPage } from '../detailcontrat/detailcontrat';
import { MypopoverPage } from '../mypopover/mypopover';
import { ContentieuxServiceProvider } from '../../providers/contentieux-servive/contentieux-service';
import { ContratServiceProvider } from '../../providers/contrat-service/contrat-service';

/**
 * Generated class for the ContractslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contractslist',
  templateUrl: 'contractslist.html',
  providers: [ContratServiceProvider]
})
export class ContractslistPage {
  contrat: any;
  listc: any[];
  ajoutcontrat=AjoutcontratsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController,public contratServiceProvider:ContratServiceProvider) {
      this.getcontrat(); 
  }

  getcontrat(){
  this.listc=[];
  // console.log("getclientdata Mrissa."+id);
  //alert('localStorage.getItem("IDClient") :'+localStorage.getItem("IDClient"))
  let IdClient=localStorage.getItem("IDClient");
  this.contratServiceProvider.getcontrat(IdClient).then((dataa) => {
  // console.log("getcontentieux contentieuxServiceProvider getcontentieux Mrissa."); 
  this.contrat= dataa;
  let i : any ;
  console.log(JSON.stringify(dataa));
  for(i=0;i<(this.contrat.length);i++) {
  if(this.contrat[i].Nature == 'contrat')
  {
  //alert(this.Contentieux[i].Nature)
  let atc : any =[] ;
  //at=this.list[i];
  atc.Id=this.contrat[i].Id;
  atc.CodeInterne=this.contrat[i].CodeInterne;
  atc.DateCas=this.contrat[i].DateCas.substring(0,10);
  this.listc.push(atc);
  }
  
  }
  //this.getcontentieuxCas(this.Contentieux);
  console.log('list'+this.listc[0].Id);
  });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractslistPage');
  }
  detailContrat(event, MyContentieux){
    this.navCtrl.push(DetailcontratPage,  {  
      MyContentieux:MyContentieux,
    
    });
  }
  presentPopover(event) {
    let popover = this.popoverCtrl.create(MypopoverPage);
  
   
    popover.present({
      ev:event
    });
  }
}
