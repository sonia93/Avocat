import { Component ,Injectable, Inject, Input, AfterViewInit, OnDestroy, ViewChild} from '@angular/core';
import { MenuController, NavController, IonicPage ,AlertController, PopoverController, ViewController } from 'ionic-angular';
import { MypopoverPage } from '../mypopover/mypopover';
import  {MyApp} from '../../app/app.component';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})

@Injectable()
export class SideMenuPage {

  MENU = {
    DEFAULT: 'menu-components',
    MATERIAL: 'menu-material',
    AVATAR: 'menu-avatar',
  };
  

    rootPage: any;
    //animation
    SideMenuPage = SideMenuPage;
    splash = true;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController,public menuCtrl: MenuController,private alertCtrl: AlertController,public popoverCtrl: PopoverController) 
{
  //alert('okkkk')
  //this.menuCtrl.enable(false);
 
}

//animation 
  //animation
  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }
 
  /*// Only enables right side menu for this page. Testing purposes.
  ionViewWillEnter() {
   this.menuCtrl.enable(true, 'menu-right');
  }*/
 
 


  
  changeMenu(menu) {

    // Disables all other sidemenus
   Object.keys(this.MENU).map(k => this.menuCtrl.enable(false, this.MENU[k]));

    // Enables then open the selected menu
    this.menuCtrl.enable(true, menu);
    this.menuCtrl.open(menu);
  }

  
 


  presentPopover(event) {
    let popover = this.popoverCtrl.create(MypopoverPage);
  
   
    popover.present({
      ev:event
    });
  }
 
}
