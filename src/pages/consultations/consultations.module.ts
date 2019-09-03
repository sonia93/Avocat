import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultationsPage } from './consultations';
//import { SearchPipe } from '../../pipes/search/search';

@NgModule({
  declarations: [
    ConsultationsPage,
  //  SearchPipe,
  ],
  imports: [
    IonicPageModule.forChild(ConsultationsPage),
  ],
})
export class ConsultationsPageModule {}
