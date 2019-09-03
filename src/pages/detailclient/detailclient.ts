import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
/**
 * Generated class for the DetailclientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailclient',
  templateUrl: 'detailclient.html',
})
export class DetailclientPage {
  data: string;
 url:string;
 public firstParam;
 public secondParam;
 selectedItem: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
   
    public http: Http
 )

  {
    this.selectedItem = navParams.get('myclient');
    
 // this.navParams.get('value');
  }
 

  ionViewDidLoad() {
    this.clientsdata();
  }

  public clientsdata(){
  
    //alert(UserName + Password)
  
     
     return new Promise(resolve => {
       this.http.get('http://avocanet.tn/api/WSClient/Get?AvocatId')
    
       .subscribe(data => {
        
         var resultt = data.json();
         //console.log('api result '+resultt.toString());   
         resolve(resultt);
         //console.log('api'+resultt);   
       }, err => {
         console.log(err);
         resolve(null);
       })
      });
    } 
    
   }
  