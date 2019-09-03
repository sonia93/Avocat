import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { detailServiceProvider } from '../../providers/detailCas_service/detailCas-service';

/**
 * Generated class for the DetailconsultationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailconsultations',
  templateUrl: 'detailconsultations.html',
  providers: [detailServiceProvider]
})
export class DetailconsultationsPage {
  detail : string="General" ;
  SwipedTabsIndicator :any= null;
  tabElementWidth_px :number= 50;
  tabs:any=[];
  selectedItem: any;



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



  WSDetailClient: any;
  listdetailContentieuxGeneral:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public ServiceProvider:detailServiceProvider) {
    this.tabs=["Général" ];
    
    //get data Contentieux
    this.selectedItem = navParams.get('value');
 // alert(''+ this.selectedItem) 
    this.getcontentieuxdetail(this.selectedItem);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailconsultationsPage');
  }
 
  
    getcontentieuxdetail(codeInterne){
      //alert(codeInterne)
      
      this.listdetailContentieuxGeneral=[];
     
      
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
  
  
  
      
  
     
      //this.WSDetailClient= this.WSDetailClient.LsPaiement;
      console.log(JSON.stringify(datas));
  
     
      });
     
     
  

   
    }

}
