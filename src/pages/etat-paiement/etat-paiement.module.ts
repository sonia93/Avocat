import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EtatPaiementPage } from './etat-paiement';

@NgModule({
  declarations: [
    EtatPaiementPage,
  ],
  imports: [
    IonicPageModule.forChild(EtatPaiementPage),
  ],
})
export class EtatPaiementPageModule {}
