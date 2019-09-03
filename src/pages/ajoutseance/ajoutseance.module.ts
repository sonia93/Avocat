import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutseancePage } from './ajoutseance';

@NgModule({
  declarations: [
    AjoutseancePage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutseancePage),
  ],
})
export class AjoutseancePageModule {}
