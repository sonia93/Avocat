import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { InterceptorProvider } from './../shared/interceptor';

//
import { IonicApp, IonicErrorHandler, IonicModule,MenuController} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import {SideMenuPage} from '../pages/menu/menu';
import {LoginPage} from "../pages/login/login";
import { AjoutclientPage } from '../pages/ajoutclient/ajoutclient';
import { AjoutcontentieuxPage } from '../pages/ajoutcontentieux/ajoutcontentieux';
import { AjoutcontratsPage } from '../pages/ajoutcontrats/ajoutcontrats';
import { AjoutrendezvousPage } from '../pages/ajoutrendezvous/ajoutrendezvous';
import { AjoutconsultationPage } from '../pages/ajoutconsultation/ajoutconsultation';
import { EditerclientPage } from '../pages/editerclient/editerclient';
import { ContentieuxPage } from '../pages/contentieux/contentieux';

import { ConsultationsPage } from '../pages/consultations/consultations';
//import { Calendar } from '@ionic-native/calendar';
//import { CalendarModule } from 'ionic3-calendar-en';
//import { NgCalendarModule  } from 'ionic2-calendar';

import { CustomEventTitleFormatterProvider } from '../providers/custom-event-title-formatter/custom-event-title-formatter';
import { CustomDateFormatterProvider } from '../providers/custom-date-formatter/custom-date-formatter';

/*
import localeFrCa from '@angular/common/locales/fr-CA';
import localeFrCaExtra from '@angular/common/locales/extra/fr-CA';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFrCa, localeFrCaExtra);*/

import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { DetailclientPage } from '../pages/detailclient/detailclient';
import { DetailContentieuxPage } from '../pages/detail-contentieux/detail-contentieux';
import { PaiementsPage } from '../pages/paiements/paiements';
import { JustificatifsPage } from '../pages/justificatifs/justificatifs';
import { SeancesPage } from '../pages/seances/seances';
import { RapportsPage } from '../pages/rapports/rapports';
import { ChargesPage } from '../pages/charges/charges';
import { FichiersPage } from '../pages/fichiers/fichiers';
import { EvenementsPage } from '../pages/evenements/evenements';
import { ArchivecontentieuxPage } from '../pages/archivecontentieux/archivecontentieux';
registerLocaleData(localeFr);


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DetailcontratPage } from '../pages/detailcontrat/detailcontrat';
import { DetailconsultationsPage } from '../pages/detailconsultations/detailconsultations';
import { FichierscontratPage } from '../pages/fichierscontrat/fichierscontrat';
import { PaiementscontratPage } from '../pages/paiementscontrat/paiementscontrat';
import { SeancescontratPage } from '../pages/seancescontrat/seancescontrat';
import { RapportscontratPage } from '../pages/rapportscontrat/rapportscontrat';
import { MypopoverPage } from '../pages/mypopover/mypopover';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MaterialModule } from './material.module';
import { ProfilePage } from '../pages/profile/profile';
import { InscriptionPage } from '../pages/inscription/inscription';
import { FacturehistoryPage } from '../pages/facturehistory/facturehistory';
//traduction language
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';

/*import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe);*/
import { NgCalendarModule  } from 'ionic2-calendar';
import { NotificationPage } from '../pages/notification/notification';
import { ListevenementsPage } from '../pages/listevenements/listevenements';
import { ListevenementsvenirPage } from '../pages/listevenementsvenir/listevenementsvenir';
import { DetailetatpaiementPage } from '../pages/detailetatpaiement/detailetatpaiement';
//telecherger PDF
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { DownloadPage } from '../pages/download/download';

import { FileChooser } from '@ionic-native/file-chooser';

import { FilePath } from '@ionic-native/file-path';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { PopoverjustificatifsPage } from '../pages/popoverjustificatifs/popoverjustificatifs';
import { AjoutjustificatifPage } from '../pages/ajoutjustificatif/ajoutjustificatif';
import { AjoutpaiementPage } from '../pages/ajoutpaiement/ajoutpaiement';
import { AjoutrapportPage } from '../pages/ajoutrapport/ajoutrapport';
import { AjoutevenementPage } from '../pages/ajoutevenement/ajoutevenement';
import { AjoutseancePage } from '../pages/ajoutseance/ajoutseance';
import { AjoutfichierPage } from '../pages/ajoutfichier/ajoutfichier';
import { AjoutchargePage } from '../pages/ajoutcharge/ajoutcharge';
import { AjoutseancecontratPage } from '../pages/ajoutseancecontrat/ajoutseancecontrat';
import { AjoutpaiementcontratPage } from '../pages/ajoutpaiementcontrat/ajoutpaiementcontrat';
import { AjoutrapportcontratPage } from '../pages/ajoutrapportcontrat/ajoutrapportcontrat';
import { AjoutfichiercontratPage } from '../pages/ajoutfichiercontrat/ajoutfichiercontrat';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { TransformProvider } from '../providers/transform/transform';

import { LocalNotifications } from '@ionic-native/local-notifications';
//


 //notification
 import { DatePicker } from '@ionic-native/date-picker';
import { ContentieuxServiceProvider } from '../providers/contentieux-servive/contentieux-service';
import { AgendaEventsProvider } from '../providers/agenda-events/agenda-events';


//import { LocalNotifications } from '@ionic-native/local-notifications';
//

@NgModule({
  declarations: [
    
    MyApp,
    SideMenuPage,
    LoginPage,
    AjoutclientPage ,
    AjoutcontentieuxPage,
    AjoutcontratsPage,
    AjoutrendezvousPage,
    AjoutconsultationPage,
    EditerclientPage,
    DetailclientPage,
    DetailContentieuxPage, 
    PaiementsPage,
    JustificatifsPage,
    SeancesPage,
    RapportsPage,
    ChargesPage,
    FichiersPage,
    EvenementsPage,
    ArchivecontentieuxPage,
    DetailcontratPage,
    DetailconsultationsPage,
    PaiementscontratPage,
    SeancescontratPage,
    RapportscontratPage,
    FichierscontratPage,
    MypopoverPage,
    ProfilePage,
    InscriptionPage,
    FacturehistoryPage,
    NotificationPage,
    ListevenementsPage,
    ListevenementsvenirPage,
    DetailetatpaiementPage,
    DownloadPage,
    PopoverjustificatifsPage,
    AjoutjustificatifPage,
    AjoutpaiementPage,
    AjoutrapportPage,
    AjoutevenementPage,
    AjoutseancePage,
    AjoutfichierPage,
    AjoutchargePage,
    AjoutseancecontratPage,
    AjoutpaiementcontratPage,
    AjoutrapportcontratPage,
    AjoutfichiercontratPage,
  
  
   
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    
    
  
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SideMenuPage,
    LoginPage,
    AjoutclientPage ,
    AjoutcontentieuxPage,
    AjoutcontratsPage,
    AjoutrendezvousPage,
    AjoutconsultationPage,
    EditerclientPage,
    DetailclientPage,
    DetailContentieuxPage,
    PaiementsPage, 
    JustificatifsPage,
    SeancesPage,
    RapportsPage,
    ChargesPage,
    FichiersPage,
    EvenementsPage,
    ArchivecontentieuxPage,
    DetailcontratPage,
    DetailconsultationsPage,
    PaiementscontratPage,
    SeancescontratPage,
    RapportscontratPage,
    FichierscontratPage,
    MypopoverPage,
     ProfilePage ,
     InscriptionPage,
     FacturehistoryPage,
     NotificationPage,
     ListevenementsPage,
     ListevenementsvenirPage,
     DetailetatpaiementPage,
     DownloadPage,
     PopoverjustificatifsPage,
     AjoutjustificatifPage,
     AjoutpaiementPage,
     AjoutrapportPage,
     AjoutevenementPage,
     AjoutseancePage,
     AjoutfichierPage,
     AjoutchargePage,
     AjoutseancecontratPage,
     AjoutpaiementcontratPage,
     AjoutrapportcontratPage,
     AjoutfichiercontratPage,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
   // LocalNotifications ,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    FilePath,
    FileOpener,
    DocumentViewer,
    FileTransfer,
   LocalNotifications,
   DatePicker,
    TransformProvider,
    ContentieuxServiceProvider,
    AuthServiceProvider,
  
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorProvider,
      multi: true
    },
    AgendaEventsProvider]
  

})

export class AppModule  {

}
