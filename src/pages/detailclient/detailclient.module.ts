import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailclientPage } from './detailclient';

@NgModule({
  declarations: [
    DetailclientPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailclientPage),
  ],
})
export class DetailclientPageModule {}
