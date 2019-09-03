import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, AlertController } from 'ionic-angular';

import { AjoutclientPage } from '../ajoutclient/ajoutclient';
import { EditerclientPage } from '../editerclient/editerclient';
import { ContentieuxPage } from '../contentieux/contentieux';
import { ConsultationsPage } from '../consultations/consultations';

import { DetailclientPage } from '../detailclient/detailclient';
import { MypopoverPage } from '../mypopover/mypopover';
//

import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';


import { ClientServiceProvider} from "../../providers/client-service/client-service";
/**
 * Generated class for the ClientpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientpage',
  templateUrl: 'clientpage.html',
  providers: [ClientServiceProvider]
})

export class ClientpagePage {
  [x: string]: any;
  id: any;
  searchQuery: string = '';
  items: string[];
  ajout=AjoutclientPage;
  editclient=EditerclientPage;
 WSClient:any;

//public WSClient: Myclient[];
  //
 // public clientitem: Array<any>;
  //public peoples: any;
  public xmlItems : any;
  public form : FormGroup;
 
  constructor(public navCtrl: NavController,    
    public clientServiceProvider : ClientServiceProvider , 
    private _CL : FormBuilder,public navParams: NavParams,
    public popoverCtrl: PopoverController,
    private alertCtrl: AlertController,) {
    console.log("PeopleListPage constructor."+this.id);
  //  this.clientitem = [];
   // this.loadPeople();
   this.getclientdata();
  // this.loadPeople();
  
  }
  /*loadPeople(){
    this.restProvider.load()
    .then(data => {
    
            this.WSClient= data;
        
           // alert(""+ this.people[0].Nom);
      console.log("APIIII"+JSON.stringify(this.WSClient));
    });
  } */
  getclientdata(){
    console.log("getclientdata  Mrissa.");
    let IdClient=localStorage.getItem("IDClient");
    this.clientServiceProvider.getclientdata(IdClient).then((data) => {
      console.log("getclientdata clientServiceProvider  getclientdata Mrissa."); 
    
      this.WSClient= data;
      console.log(JSON.stringify(data));
    });
    console.log(this.WSClient);
  }

 
 /* loadPeople(){
    this. clientServiceProvider.loadXML(this.id).then((result) => {
      this.data= result;
      // this.loading.dismiss();
       //alert(JSON.stringify(data));
       this.clientitem[0]= result;
       localStorage.setItem('token',this.clientitem[0].access_token);
       console.log(result);
       if( this.data)
       {
       if (this.data.Id == null)
         {
           this.showError();
         }
        
        }
     }, error => {
      // this.loading.dismiss();
      // this.presentToast(error);
      this.showErrorserver();
     });
   
  }
*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad PeopleListPage');
  }
  
  //
  showErrorserver() {
    //this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Ereur',
      subTitle: 'Erreur serveur',
      buttons: [
        {
          text: 'Ok',
          role: 'Ok',
          handler: data => {
          }
        }]
    });
    alert.present(prompt);
  }
 
  /*removeInputField(i : number) : void
  {
     const control = <FormArray>this.form.controls.technologies;
     control.removeAt(i);
  }*/
 
 
  /*removeclient(myclient, index:number) {
    this.ClientServiceProvider.delete(myclient)
        .subscribe(res => {
          this.WSClient.splice(index, 1);
        });
  }*/
 removeclient(myclient,ID){
   
  let index = this.WSClient.indexOf(myclient);
  
 
    if(index > -1){
      this.WSClient.splice(index, 1);
  }
  }
 
  delete(myclient: any): void {
    let index = this.WSClient.indexOf(myclient);
  
 
    if(index > -1){
      this.WSClient.splice(index, 1);
    //this.WSClient = this.WSClient.filter(h => h !== myclient);
    this.ClientServiceProvider.deleteClient(myclient).subscribe();
  }
  }

  ////
  detailClient(event,myclient){
   
    this.navCtrl.push(DetailclientPage,
    {  
      myclient:myclient
    
    });
  }

  //EditerclientPage
  EditClient(event,myclient){
   
    this.navCtrl.push(EditerclientPage,
    {  
      myclient:myclient
    
    });
  }

////
 
  presentPopover(event) {
    let popover = this.popoverCtrl.create(MypopoverPage);
  
   
    popover.present({
      ev:event
    });
  }
 /* OpenPageContentieux(){
    this.navCtrl.push(ContentieuxPage);
  }
  OpenPageContrats(){
    this.navCtrl.push(ContratsPage);
  }
  OpenPageConsultations(){
    this.navCtrl.push(ConsultationsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientpagePage');
  }*/

}


