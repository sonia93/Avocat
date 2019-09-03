import { ErrorHandler, NgModule } from '@angular/core';
import { IonicPageModule,IonicApp, IonicModule } from 'ionic-angular';
import { AgendaPage } from './agenda';


import { CalendarModule, CalendarDateFormatter, CalendarEventTitleFormatter } from 'angular-calendar';
import { NgCalendarModule } from 'ionic2-calendar';
//import { CalendarWeekHoursViewModule } from 'angular-calendar-week-hours-view';
//import { NgCalendarModule } from 'ionic2-calendar';




@NgModule({
  declarations: [
    AgendaPage,
    
  ],
  imports: [
   
    IonicPageModule.forChild(AgendaPage),
   CalendarModule.forRoot(),
   // CalendarWeekHoursViewModule,
   NgCalendarModule,
    
   
  ],
})
export class AgendaPageModule {}
