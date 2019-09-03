import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutclientPage } from './ajoutclient';

@NgModule({
  declarations: [
    AjoutclientPage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutclientPage),
  ],
})
export class AjoutclientPageModule {}
