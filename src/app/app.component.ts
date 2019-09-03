//import { AppState } from './app.global';
import { Component , ViewChild } from '@angular/core';
import { Platform , Nav , MenuController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subject } from 'rxjs/Subject';

import { SideMenuPage } from '../pages/menu/menu';

import { LoginPage } from "../pages/login/login";
import { timer } from 'rxjs/observable/timer';




export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  showSplash=true; // <-- show animation
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  activePage = new Subject();

  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;
  MenuItems: Array<{ icon: string, active: boolean }>;
  state: any;
  //placeholder = 'assets/img/avatar/girl-avatar.png';
  chosenPicture: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashscreen: SplashScreen,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController
  ) {
   
this.initializeApp();

this.MenuItems = [
 
];
  
this.pages = [
  { title: 'Dashboard', component: 'DashboardPage', active: true, icon: 'speedometer' },
 // { title: 'Etat Paiement', component: 'EtatPaiementPage', active: false, icon: 'cash' },
  { title: 'Client', component: 'ClientpagePage', active: false, icon: 'people' },
  { title: 'Contentieux ', component: 'ContentieuxPage', active: false, icon: 'md-copy' },
  { title: 'Contrats', component: 'ContractslistPage', active: false, icon: 'md-contract' },
  { title: 'Consultations', component: 'ConsultationsPage', active: false, icon: 'bookmarks' },
  { title: 'Agenda', component: 'AgendaPage', active: false, icon: 'calendar' },
  //{ title: 'Archive', component: 'ArchivePage', active: false, icon: 'archive' },
  //{ title: 'Corbeille', component: 'CorbeillePage', active: false, icon: 'basket' },
 // { title: 'Listes emails', component: 'ListesemailsPage', active: false, icon: 'mail' },
  { title: 'A propos ', component: 'AproposPage', active: false, icon: 'information-circle' },
];
this.activePage.subscribe((selectedPage: any) => {
  this.pages.map(page => {
    page.active = page.title === selectedPage.title;
  });
});
}

initializeApp() {
this.platform.ready().then(() => {
 //this.global.set('theme', '');
  // Okay, so the platform is ready and our plugins are available.
  // Here you can do any higher level native things you might need.

  this.statusBar.styleDefault();
  this.splashscreen.hide();// <-- hide static image
  timer(3000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s 
  this.menuCtrl.enable(false, 'right');
  //this.menuCtrl.enable(false, 'left');
  
});
}

openPage(page) {
// Reset the content nav to have just this page
// we wouldn't want the back button to show in this scenario
this.nav.setRoot(page.component);
this.activePage.next(page);
}
/*
rightMenuClick(item) {
this.MenuItems.map(menuItem => menuItem.active = false);
item.active = true;
}*/
/*enableAuthenticatedMenu() {
 // this.menuCtrl.enable(true, 'menu-material');
  this.menuCtrl.enable(true, 'menu-material');
}*/
presentLoading() {
  let loader = this.loadingCtrl.create({
   // content: "Please wait...",
    duration: 1000,
    dismissOnPageChange: true
  });
  loader.present();
}
}
