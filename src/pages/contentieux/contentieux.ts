import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AjoutcontentieuxPage } from '../ajoutcontentieux/ajoutcontentieux';
import { DetailContentieuxPage } from '../detail-contentieux/detail-contentieux';
import { MypopoverPage } from '../mypopover/mypopover';
import { ContentieuxServiceProvider } from '../../providers/contentieux-servive/contentieux-service';

/**
 * Generated class for the ContentieuxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contentieux',
  templateUrl: 'contentieux.html',
  providers: [ContentieuxServiceProvider]
})
export class ContentieuxPage {
  
 
  Contentieux: any;
  list = [];
  id:any;

  ajoutContent=AjoutcontentieuxPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController, public contentieuxServiceProvider : ContentieuxServiceProvider) {
     this.getcontentieux(); 
   //  this.loadPeople();   
  }

 
getcontentieux(){
  this.list=[];
  // console.log("getclientdata Mrissa."+id);
  //alert('localStorage.getItem("IDClient") :'+localStorage.getItem("IDClient"))
  let IdClient=localStorage.getItem("IDClient");
  this.contentieuxServiceProvider.getcontentieux(IdClient).then((data) => {
  // console.log("getcontentieux contentieuxServiceProvider getcontentieux Mrissa."); 
  this.Contentieux= data;
  let i : any ;
  console.log(JSON.stringify(data));
  for(i=0;i<(this.Contentieux.length);i++) {
  if(this.Contentieux[i].Nature == 'cas')
  {
  //alert(this.Contentieux[i].Nature)
  let at : any =[] ;
  //at=this.list[i];
  at.Id=this.Contentieux[i].Id;
  at.CodeInterne=this.Contentieux[i].CodeInterne;
  at.DateCas=this.Contentieux[i].DateCas.substring(0,10);
//alert( at.DateCas);
  at.Montant=this.Contentieux[i].Montant;
  at.Objectifs=this.Contentieux[i].Objectifs;
  at.CodeTribunal=this.Contentieux[i].CodeTribunal;
  at.Sujet=this.Contentieux[i].Sujet;
  at.NomAdversaire=this.Contentieux[i].NomAdversaire;
  at.CinAdversaire=this.Contentieux[i].CinAdversaire;

  if (this.Contentieux[i].Statut == 0)
  {
    at.Statut='Initiés';
  }
  else 
  if (this.Contentieux[i].Statut == 1)
  {
    at.Statut='En cours';
  }
  else if (this.Contentieux[i].Statut == 2)
  {
    at.Statut='Finis';
  }
  else if (this.Contentieux[i].Statut == 3)
  {
    at.Statut='Clôturé';
  }
  at.Charge=this.Contentieux[i].Charge;
  at.Petition=this.Contentieux[i].Petition;
  at.Ennonciation=this.Contentieux[i].Ennonciation;
  
  this.list.push(at);
  }
  
  }
  //this.getcontentieuxCas(this.Contentieux);
  console.log('list'+this.list[0].Id);
  });
  }
 /*    
  loadPeople(){
    this.contentieuxServiceProvider.load()
    .then(data => {
    
            this.people= data;
        
           // alert(""+ this.people[0].Nom);
      console.log("APIIII"+JSON.stringify(this.people));
    });
  } */
 /* openPage(event, person){
    this.navCtrl.push(InfoPage, {
        person: person
       // firstPassed: this.people[0].Nom,
       // secondPassed:this.people[0].Prenom
    })
   
  }*/
    // 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentieuxPage');
  }
  detailContentieux(event, MyContentieux){
    //alert(MyContentieux);
    this.navCtrl.push(DetailContentieuxPage,
    {  
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
