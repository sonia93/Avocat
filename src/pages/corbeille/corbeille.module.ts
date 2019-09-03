import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CorbeillePage } from './corbeille';

@NgModule({
  declarations: [
    CorbeillePage,
  ],
  imports: [
    IonicPageModule.forChild(CorbeillePage),
  ],
})
export class CorbeillePageModule {}
