import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContentieuxPage } from './contentieux';
//import { SearchPipe } from '../../pipes/search/search';

@NgModule({
  declarations: [
    ContentieuxPage,
   // SearchPipe,
  ],
  imports: [
    IonicPageModule.forChild(ContentieuxPage),
  ],
})
export class ContentieuxPageModule {}
