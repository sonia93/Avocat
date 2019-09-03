import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

/**
 * Generated class for the ListevenementsvenirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listevenementsvenir',
  templateUrl: 'listevenementsvenir.html',
})
export class ListevenementsvenirPage {

 
  constructor(public navCtrl: NavController,public viewCtrl: ViewController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListevenementsvenirPage');
  }
  
  close() {
    this.viewCtrl.dismiss();
  }

}
