import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeancesPage } from './seances';

@NgModule({
  declarations: [
    SeancesPage,
  ],
  imports: [
    IonicPageModule.forChild(SeancesPage),
  ],
})
export class SeancesPageModule {}
