import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutevenementPage } from './ajoutevenement';

@NgModule({
  declarations: [
    AjoutevenementPage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutevenementPage),
  ],
})
export class AjoutevenementPageModule {}
