import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides, Content, PopoverController } from 'ionic-angular';
import { PaiementscontratPage } from '../paiementscontrat/paiementscontrat';
import { RapportscontratPage } from '../rapportscontrat/rapportscontrat';
import { SeancescontratPage } from '../seancescontrat/seancescontrat';
import { FichierscontratPage } from '../fichierscontrat/fichierscontrat';
import { PopoverjustificatifsPage } from '../popoverjustificatifs/popoverjustificatifs';
import { AjoutseancecontratPage } from '../ajoutseancecontrat/ajoutseancecontrat';
import { AjoutpaiementcontratPage } from '../ajoutpaiementcontrat/ajoutpaiementcontrat';
import { AjoutrapportcontratPage } from '../ajoutrapportcontrat/ajoutrapportcontrat';
import { AjoutfichiercontratPage } from '../ajoutfichiercontrat/ajoutfichiercontrat';
import { detailServiceProvider } from '../../providers/detailCas_service/detailCas-service';

/**
 * Generated class for the DetailcontratPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailcontrat',
  templateUrl: 'detailcontrat.html',
  providers: [detailServiceProvider]
})
export class DetailcontratPage {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;
  @ViewChild('scroll') scroll: Content;
  SwipedTabsIndicator :any= null;
  tabElementWidth_px :number= 50;
  tabs:any=[];

    WSDetailClient: any;
  listdetailContentieuxGeneral:any;
  listdetailContentieux: any;
  listdetailContentieuxReport: any;
  listdetailContentieuxCharge:any;
  listdetailContentieuxFiles:any;
  listdetailContentieuxEvents:any;
  listdetailContentieuxSeances:any;
  listdetailContentieuxatJsutificatif:any;

 
  
  selectedItem: any;
  ShowLine = true;
  MontantTotal:any;
  ChargeValue:any;
  
  Montant:any;
  CodeInterneg:any;
  CodeTribunal:any;
  Sujet:any;
  Objectifs:any;
  NomAdversaire:any;
  CinAdversaire:any;
  DateCas:any;
  Statut:any;
  Chargeg:any;
  Petition:any;
  Ennonciation:any;


  constructor(public navParams: NavParams,public navCtrl: NavController,public ServiceProvider:detailServiceProvider,public popoverCtrl: PopoverController) {
  	this.tabs=["Général" ,"Paiements","Seances","Rapports","Fichiers"];
    
    //get data Contentieux
    this.selectedItem = navParams.get('MyContentieux');
   
    this.getcontentieuxdetail(this.selectedItem.CodeInterne);
    //alert(this.selectedItem.CodeInterne)
    //get data rapport
    //this.getcontentieuxrapport(this.selectedItem.CodeInterne);
    this.selectedItem = navParams.get('MyRapport');
  
  }
 
  getcontentieuxdetail(codeInterne){
    this.listdetailContentieuxGeneral=[];
    this.listdetailContentieux=[];
    this.listdetailContentieuxReport=[];
    this.listdetailContentieuxCharge=[];
    this.listdetailContentieuxFiles=[];
    this.listdetailContentieuxEvents=[];
    this.listdetailContentieuxSeances=[];
    this.listdetailContentieuxatJsutificatif=[];
    
    
    this.ServiceProvider.getdetailCas(codeInterne).then((datas) => {
    console.log("Get deatil paiementttttttttttttttttt"); 
    this.WSDetailClient=datas;
   
    this.Montant=this.WSDetailClient.Cas.Montant;
    this.CodeInterneg=this.WSDetailClient.Cas.Montant;
    this.CodeTribunal=this.WSDetailClient.Cas.CodeTribunal;
    this.Sujet=this.WSDetailClient.Cas.Sujet;
    this.Objectifs=this.WSDetailClient.Cas.Objectifs;
    this.NomAdversaire=this.WSDetailClient.Cas.NomAdversaire;
    this.CinAdversaire=this.WSDetailClient.Cas.CinAdversaire;
    this.DateCas=this.WSDetailClient.Cas.DateCas;
    //this.Statut=this.WSDetailClient.Cas.Statut;
    if (this.WSDetailClient.Cas.Statut == 0)
    {
      this.Statut='Initiés';
    }
    else 
    if (this.WSDetailClient.Cas.Statut == 1)
    {
      this.Statut='En cours';
    }
    else if (this.WSDetailClient.Cas.Statut == 2)
    {
      this.Statut='Finis';
    }
    else if (this.WSDetailClient.Cas.Statut == 3)
    {
      this.Statut='Clôturé';
    }
    this.Chargeg=this.WSDetailClient.Cas.Charge;
    this.Petition=this.WSDetailClient.Cas.Petition;
    this.Ennonciation=this.WSDetailClient.Cas.Ennonciation;



    this.MontantTotal=this.WSDetailClient.Cas.Montant;
    this.ChargeValue=this.WSDetailClient.Cas.Charge; 

   
    //this.WSDetailClient= this.WSDetailClient.LsPaiement;
    console.log(JSON.stringify(datas));

    /****************GENERAL DATA***************** */
    let g : any ;
    for(g=0;g<(this.WSDetailClient.Cas.length);g++) {
      
      let atg : any =[] ;
      
      atg.Montant=this.WSDetailClient.Cas.Montant;
      atg.CodeInterne=this.WSDetailClient.Cas.CodeInterne;
     
      this.listdetailContentieuxGeneral.push(atg);

     
}

/****************GENERAL AND PAYMENT DATA***************** */
    let j : any ;
    let TotalPaiement=0;

    
/****************GENERAL AND PAYMENT DATA***************** */
    for(j=0;j<(this.WSDetailClient.LsPaiement.length);j++) {
      
          let at : any =[] ;
          at.Description=this.WSDetailClient.LsPaiement[j].Description;
          at.Montant=this.WSDetailClient.LsPaiement[j].Montant;
          TotalPaiement= TotalPaiement + this.WSDetailClient.LsPaiement[j].Montant;
          //alert(TotalPaiement)
          at.DatePaiement=this.WSDetailClient.LsPaiement[j].DatePaiement;

          if (this.WSDetailClient.LsPaiement[j].Type == 0)
          {
            at.Type='Chèque';
          }
          else 
          if (this.WSDetailClient.LsPaiement[j].Type == 1)
          {
            at.Type='Traite';
          }
          else if (this.WSDetailClient.LsPaiement[j].Type == 2)
          {
            at.Type='Espèce';
          }


          at.DateReel=this.WSDetailClient.LsPaiement[j].DateReel;
          //at.MontantTotal=MontantTotal;

          this.listdetailContentieux.push(at);

         
    }
    this.MontantTotal=this.MontantTotal-TotalPaiement;
/****************GENERAL AND PAYMENT DATA***************** */
    
/****************Report DATA***************** */
let k : any ;

//alert(this.WSDetailClient.LsRapport.length)
for(k=0;k<(this.WSDetailClient.LsRapport.length);k++) {
let atreport : any =[] ;

atreport.Libelle=this.WSDetailClient.LsRapport[k].Libelle;
atreport.Fichier=this.WSDetailClient.LsRapport[k].Fichier;
atreport.Id=this.WSDetailClient.LsRapport[k].Id;

this.listdetailContentieuxReport.push(atreport);
}
/****************Report DATA***************** */

/****************Charge DATA***************** */

   
  let l : any ;
  let TotalCharges=0;
  for( l=0; l<(this.WSDetailClient.LsCharge.length); l++) {
  let atcharge : any =[] ;
 
  TotalCharges= TotalCharges + this.WSDetailClient.LsCharge [l].Montant;
  //alert(TotalCharges)
  atcharge.Montant=this.WSDetailClient.LsCharge [l].Montant;
  atcharge.DateCharge=this.WSDetailClient.LsCharge [l].DateCharge;
 
  
  this.listdetailContentieuxCharge.push(atcharge);
  }
  this.ChargeValue = this.ChargeValue - TotalCharges;
/****************Charge DATA***************** */

/****************LsFichier DATA***************** */
let f : any ;

//alert(this.WSDetailClient.LsRapport.length)
for(f=0;f<(this.WSDetailClient.LsFichier.length);f++) {
let atFiles : any =[] ;

atFiles.Id=this.WSDetailClient.LsFichier[f].Id;
atFiles.Nom=this.WSDetailClient.LsFichier[f].Nom;
atFiles.NomFichier=this.WSDetailClient.LsFichier[f].NomFichier;

this.listdetailContentieuxFiles.push(atFiles);
}
/****************LsFichier DATA***************** */

/****************LsEvenement  DATA***************** */
let e : any ;

//alert(this.WSDetailClient.LsRapport.length)
for(e=0;e<(this.WSDetailClient.LsEvenement.length);e++) {
let atEvents : any =[] ;

atEvents.Lieux=this.WSDetailClient.LsEvenement[e].Lieux;
atEvents.DateEvenement=this.WSDetailClient.LsEvenement[e].DateEvenement;


this.listdetailContentieuxEvents.push(atEvents);
}
/****************LsEvenement  DATA***************** */


/****************LsSeance   DATA***************** */
let s : any ;

//alert(this.WSDetailClient.LsRapport.length)
for(s=0;s<(this.WSDetailClient.LsSeance .length);s++) {
let atSeances : any =[] ;

atSeances.Description=this.WSDetailClient.LsSeance[s].Description;
atSeances.Libelle=this.WSDetailClient.LsSeance[s].Libelle;
/*
atSeances.DateSeance=this.WSDetailClient.LsSeance[s].DateSeance;
atSeances.Lieux=this.WSDetailClient.LsSeance[s].Lieux;*/




this.listdetailContentieuxSeances.push(atSeances);
}

/****************LsSeance   DATA***************** */
/****************LsJustificatif   DATA***************** *
let js : any ;

//alert(this.WSDetailClient.LsRapport.length)
for(js=0;js<(this.WSDetailClient.LsJsutificatif .length);js++) {
let atJsutificatif: any =[] ;

atJsutificatif.Libelle=this.WSDetailClient.LsJsutificatif[js].Libelle;
atJsutificatif.DateSeance=this.WSDetailClient.LsJsutificatif[js].Fichier;

this.listdetailContentieuxatJsutificatif.push(atJsutificatif);
}
/****************LsEvenement  DATA***************** */
    });
   
    }

   
    OpenFile(id,extension){
      let newextension=extension.substring(extension.lastIndexOf("."), extension.length);
      //alert(newextension)
      window.open('http://avocanet.tn/Files/Fichiers/'+id+newextension, '_system', 'location=yes');

    }
    
    OpenReport(id,extension){
      let newextension=extension.substring(extension.lastIndexOf("."), extension.length);
      //alert(newextension)
      window.open('http://avocanet.tn/Files/Rapports/'+id+newextension, '_system', 'location=yes');

    }

  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }
  
  
  detailPaiements(){
    this.navCtrl.push(PaiementscontratPage);
    }
  
    detailSeances(){
      this.navCtrl.push(SeancescontratPage);
    }
  
    detailRapports(){
      this.navCtrl.push(RapportscontratPage);
    }
 
   
    detailFichiers(){
      this.navCtrl.push(FichierscontratPage);
    }
   
    selectTab(index) {
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
       this.scroll.scrollTo(index*this.tabElementWidth_px,0,500);
      this.SwipedTabsSlider.slideTo(index, 500);
    }
  
    updateIndicatorPosition() {
      this.scroll.scrollTo(this.SwipedTabsSlider.getActiveIndex()*this.tabElementWidth_px,0,200);
  
        // this condition is to avoid passing to incorrect index
      if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
      {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
      }
  
      }
  
  
    animateIndicator($event) {
      if(this.SwipedTabsIndicator)
           this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  
    }
    //
    Popoverjustificatifs(event) {
      let popover = this.popoverCtrl.create(PopoverjustificatifsPage);
    
     
      popover.present({
        ev:event
      });
    }
   
   ajoutpaiement(){
    this.navCtrl.push(AjoutpaiementcontratPage );
   }
   ajoutseance(){
    this.navCtrl.push(AjoutseancecontratPage);
  }
  ajoutrapport(){
    this.navCtrl.push(AjoutrapportcontratPage);
  }
 
 //AjoutfichierPage
 ajoutfichier(){
  this.navCtrl.push(AjoutfichiercontratPage); 
 }
 //AjoutchargePage

  //detail : string="General" ;
 /* constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailcontratPage');
  }
 
  detailPaiements(){
  this.navCtrl.push( PaiementscontratPage )
  
  }

  detailSeances(){
    this.navCtrl.push(  SeancescontratPage )
   
  }

  detailRapports(){
    this.navCtrl.push(RapportscontratPage);
  }


  detailFichiers(){
    this.navCtrl.push(FichierscontratPage);
  }*/
}
