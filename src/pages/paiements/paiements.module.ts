import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaiementsPage } from './paiements';

@NgModule({
  declarations: [
    PaiementsPage,
  ],
  imports: [
    IonicPageModule.forChild(PaiementsPage),
  ],
})
export class PaiementsPageModule {}
