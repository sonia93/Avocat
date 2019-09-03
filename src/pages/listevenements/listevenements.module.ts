import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListevenementsPage } from './listevenements';

@NgModule({
  declarations: [
    ListevenementsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListevenementsPage),
  ],
})
export class ListevenementsPageModule {}
