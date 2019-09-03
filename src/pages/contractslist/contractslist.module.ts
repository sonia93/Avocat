import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractslistPage } from './contractslist';
//import { SearchPipe } from '../../pipes/search/search';

@NgModule({
  declarations: [
    ContractslistPage,
  //
  ],
  imports: [
    IonicPageModule.forChild(ContractslistPage),
  //  SearchPipe,
  ],
})
export class ContractslistPageModule {}
