import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, MenuController, App } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';

/**
 * Generated class for the MypopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mypopover',
  templateUrl: 'mypopover.html',
  
})
export class MypopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    public menuCtrl: MenuController,
   public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MypopoverPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }
  profile(){
    this.navCtrl.push( ProfilePage);
    
    }
    logout(){
     // this.navCtrl.popToRoot() ;
     
    var navCtrl = this.app.getRootNav();
    this.menuCtrl.close();
    navCtrl.setRoot(LoginPage) 
    this.viewCtrl.dismiss();
       
    }

      
}
