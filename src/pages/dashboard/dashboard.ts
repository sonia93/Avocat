import {  Component, ViewChild} from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams,AlertController,PopoverController, ModalController  } from 'ionic-angular';
import { MypopoverPage } from '../mypopover/mypopover';
import { NotificationPage } from '../notification/notification';
import { ListevenementsPage } from '../listevenements/listevenements';
import * as HighCharts from 'highcharts';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigevenation.
 */

import { Chart } from 'chart.js';
import { ListevenementsvenirPage } from '../listevenementsvenir/listevenementsvenir';
import { FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  
 
})
export class DashboardPage {
    [x: string]: any;
  myDate: String = new Date().toISOString();
//*** */

   
    @ViewChild('lineCanvas') lineCanvas;
 
    
   
    lineChart: any;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public modalCtrl: ModalController,viewCtrl: ViewController, public navParams: NavParams,private alertCtrl: AlertController,public popoverCtrl: PopoverController) {
  
  }
  ionViewDidLoad(){
    var myChart = HighCharts.chart('container', {

      title: {
          text: 'Dernier trimestre'
      },
  
    
      yAxis: {
          title: {
              text: ''
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },
  
      plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              },
              pointStart: 2018
          }
      },
      
  
      series: [{
          name: 'Montant Total',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }, {
          name: 'Paiement Total',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
   
      }],
  
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }
  
  });
  }

 
 /** */
 /*
 ionViewDidLoad() {
 
 

 

  this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
          labels: ["2018/01/02", "2018-01-03", "2018-05-06", "2018-06-03", "2018-07-06", "2018-08-01", "2018-09-01"],
          datasets: [
              {
                  label: "Montant Total",
                  
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: [0, 0, 0, 0, 0, 0, 0],
                  spanGaps: false,
              }
              
          ]
      }

  });

}



 //** */
  presentPopover(event) {
    let popover = this.popoverCtrl.create(MypopoverPage);
  
   
    popover.present({
      ev:event
    });
  }
  /////////
  Listevenementsvenir(){

    let profileModal = this.modalCtrl.create(ListevenementsvenirPage);
    profileModal.present();
  }
  
 //
  someDateFunction() {
    let timezoneOffset = (new Date()).getTimezoneOffset() * 60000+1; //offset in milliseconds
    let localDateTime = (new Date(Date.now() - timezoneOffset)).toISOString().slice(0,-1);
  
    return localDateTime;
  }
  /*
  Listevenementsvenir() {
    this.navCtrl.push(ListevenementsvenirPage);
  }*/

 

 /* Listevenementsvenir(event) {
    let popover = this.popoverCtrl.create(ListevenementsvenirPage);
  
   
    popover.present({
      ev:event
    });
  }*/
  notification(){
    this.navCtrl.push(NotificationPage);
  }
  evenements(){
    this.navCtrl.push(ListevenementsPage);
  }
/*  Listevenementsvenir(){
    this.navCtrl.push(ListevenementsvenirPage);
  }*/
 
}
