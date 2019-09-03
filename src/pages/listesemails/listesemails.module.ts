import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListesemailsPage } from './listesemails';

@NgModule({
  declarations: [
    ListesemailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListesemailsPage),
  ],
})
export class ListesemailsPageModule {}
