import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientpagePage } from './clientpage';
import { SearchPipe } from '../../pipes/search/search';



@NgModule({
  declarations: [
    ClientpagePage,
    SearchPipe, 
  ],
  imports: [
    IonicPageModule.forChild(ClientpagePage),
 
  ],
})
export class ClientpagePageModule {}
