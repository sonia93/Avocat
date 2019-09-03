import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AjoutconsultationPage } from '../ajoutconsultation/ajoutconsultation';
import { DetailconsultationsPage } from '../detailconsultations/detailconsultations';
import { MypopoverPage } from '../mypopover/mypopover';
import { ConsultationServiceProvider } from '../../providers/consultations-service/consultations-service';

/**
 * Generated class for the ConsultationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultations',
  templateUrl: 'consultations.html',
  providers: [ConsultationServiceProvider]
})
export class ConsultationsPage {
 
 
  
  Consultation: any;
  list = [];
  id:any;
  CodeInterne:any;
  ajoutconsultation=AjoutconsultationPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController,public  consultationServiceProvider: ConsultationServiceProvider) {
    this.getconsultation(); 
  }
  
  getconsultation(){
  this.list=[];
  // console.log("getclientdata Mrissa."+id);
  //alert('localStorage.getItem("IDClient") :'+localStorage.getItem("IDClient"))
  let IdClient=localStorage.getItem("IDClient");
  this.consultationServiceProvider.getconsultation(IdClient).then((data) => {
  // console.log("getcontentieux contentieuxServiceProvider getcontentieux Mrissa."); 
  this.Consultation= data;
  let i : any ;
  console.log(JSON.stringify(data));
  for(i=0;i<(this.Consultation.length);i++) {
  if(this.Consultation[i].Nature == 'consultation')
  {
  //alert(this.Contentieux[i].Nature)
  let at : any =[] ;
  //at=this.list[i];
  at.Id=this.Consultation[i].Id;
  //this.CodeInterne=this.Consultation[i].CodeInterne;
  at.CodeInterne=this.Consultation[i].CodeInterne;
  at.DateCas=this.Consultation[i].DateCas.substring(0,10);
  this.list.push(at);
  }
  
  }
  //this.getcontentieuxCas(this.Contentieux);
  console.log('list'+this.list[0].Id);
  });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultationsPage');
  }
  detailConsultations(valuet){
    this.navCtrl.push(DetailconsultationsPage,{value:valuet}); 
   //alert("value"+valuet)
  }
  presentPopover(event) {
    let popover = this.popoverCtrl.create(MypopoverPage);
  
   
    popover.present({
      ev:event
    });
  }
}
