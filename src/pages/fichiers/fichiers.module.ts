import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FichiersPage } from './fichiers';

@NgModule({
  declarations: [
    FichiersPage,
  ],
  imports: [
    IonicPageModule.forChild(FichiersPage),
  ],
})
export class FichiersPageModule {}
