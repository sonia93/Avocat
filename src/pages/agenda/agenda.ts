import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, PopoverController } from 'ionic-angular';

import { AjoutrendezvousPage } from '../ajoutrendezvous/ajoutrendezvous';
import { Subject } from 'rxjs/Subject';
import { MypopoverPage } from '../mypopover/mypopover';
import { AgendaEventsProvider } from '../../providers/agenda-events/agenda-events';
//import { Calendar } from '@ionic-native/calendar';
/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *//*
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { MypopoverPage } from '../mypopover/mypopover';*/

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
 
  ajoutrdv=AjoutrendezvousPage ;
/*
  viewDate: Date = new Date();
  view = 'week';
  locale: string = 'fr';
  isDragging = false;
  refresh: Subject<any> = new Subject();
 
  events: CalendarEvent[] = [
    {
      start: addHours(startOfDay(new Date()), 7),
      end: addHours(startOfDay(new Date()), 9),
      title: 'First Event',
      cssClass: 'custom-event',
      color: {
        primary: '#488aff',
        secondary: '#bbd0f5'
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 10),
      end: addHours(startOfDay(new Date()), 12),
      title: 'Second Event',
      cssClass: 'custom-event',
      color: {
        primary: '#488aff',
        secondary: '#bbd0f5'
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];*/
  eventSource;
  viewTitle;
   
  Agenda: any;
  list = [];
  isToday: boolean;
  calendar = {
      mode: 'month',
      currentDate: new Date()
  };
 
  constructor(public Agendaeventsprovider:AgendaEventsProvider,public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,public popoverCtrl: PopoverController) {
   
  //this.getEventsAgenda();

  }
  add_minutes =  function (dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
}
  getEventsAgenda(){
    this.calendar.mode = 'month';
    var events = [];
   
    let IdClient=localStorage.getItem("IDClient");
    this.Agendaeventsprovider.getEvents(IdClient).then((data) => {
      this.Agenda= data;
    let ev : any ;
      for(ev=0;ev<(this.Agenda.LsEvenement.length);ev++) {
    
    console.log(JSON.stringify(data));
    var date= new Date(this.Agenda.LsEvenement[ev].DateEvenement);
    events.push({
      title: 'Evénement - '+ev+this.Agenda.LsEvenement[ev].Description,
      startTime:  new Date(this.Agenda.LsEvenement[ev].DateEvenement ),
      endTime: new Date( this.add_minutes(date,this.Agenda.LsEvenement[ev].Duree)),  
      allDay: false
  });
}

let rv : any ;
      for(rv=0;rv<(this.Agenda.LsRendezVous.length);rv++) {
    var daterv= new Date(this.Agenda.LsRendezVous[rv].DateRdv);
    events.push({
      title: 'Rendez Vous - '+rv+this.Agenda.LsRendezVous[rv].Description,
      startTime:  new Date(this.Agenda.LsRendezVous[rv].DateRdv ),
      endTime: new Date( this.add_minutes(daterv,this.Agenda.LsRendezVous[rv].Duree)),  
      allDay: false
  });
}

let SE : any ;
      for(SE=0;SE<(this.Agenda.LsSeance.length);SE++) {
    var dateSE= new Date(this.Agenda.LsSeance[SE].DateSeance);
    events.push({
      title: 'Séance - '+rv+this.Agenda.LsSeance[SE].Description,
      Libelle:'Libelle - '+rv+this.Agenda.LsSeance[SE].Libelle,
      startTime:  new Date(this.Agenda.LsSeance[SE].DateSeance ),
      endTime: new Date( this.add_minutes(dateSE,this.Agenda.LsSeance[SE].Duree)),  
      allDay: false
  });
}
});
console.log(events);
return events;

    /*for(i=0;i<(this.Agenda.LsEvenement.length);i++) {
    
    //alert(this.Contentieux[i].Nature)
    let at : any =[] ;
    //at=this.list[i];
    /*at.DateEvenement=this.Agenda.LsEvenement[i].DateEvenement;
    alert(new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() )));
    at.Description=this.Agenda.LsEvenement[i].Description;
    at.Duree=this.Agenda.LsEvenement[i].Duree;
    this.list.push(at);*/
  }
    /*for (var i = 0; i < 5; i += 1) {
        var date = new Date();
        var eventType =0;
        var startDay = Math.floor(Math.random() * 90) - 45;
        var endDay = Math.floor(Math.random() * 2) + startDay;
        var startTime;
        var endTime;
    
            var startMinute = Math.floor(Math.random() * 24 * 60);
            var endMinute = Math.floor(Math.random() * 180) + startMinute;
            startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
            endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
            //alert(startTime)
             events.push({
                title: 'Event - ' + i,
               
                startTime: startTime,
                endTime: endTime,
                allDay: false
            });
        
    }*/
    
   /* this.list=[];
    var events = [];
    var date = new Date();
    // console.log("getclientdata Mrissa."+id);
    //alert('localStorage.getItem("IDClient") :'+localStorage.getItem("IDClient"))
    let IdClient=localStorage.getItem("IDClient");
    this.Agendaeventsprovider.getEvents(IdClient).then((data) => {
    // console.log("getcontentieux contentieuxServiceProvider getcontentieux Mrissa."); 
    this.Agenda= data;
    let i : any ;
    console.log(JSON.stringify(data));
    /*for(i=0;i<(this.Agenda.LsEvenement.length);i++) {
    
    //alert(this.Contentieux[i].Nature)
    let at : any =[] ;
    //at=this.list[i];
    /*at.DateEvenement=this.Agenda.LsEvenement[i].DateEvenement;
    alert(new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() )));
    at.Description=this.Agenda.LsEvenement[i].Description;
    at.Duree=this.Agenda.LsEvenement[i].Duree;
    this.list.push(at);*/
    //'Tue Jul 31 2018 02:46:00 GMT+0200'
   /* var startDay = Math.floor(Math.random() * 90) - 45;
    var startMinute = Math.floor(Math.random() * 24 * 60);
    events.push({
      title: i+' -'+this.Agenda.LsEvenement[i].Description,
      startTime:new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute),
      endTime:new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute),
      allDay: false
  });
    
    }*/
    //this.getcontentieuxCas(this.Contentieux);
   // alert('list'+this.list[0].DateEvenement);
    //});
    //return events;
   
    /*

  handleEvent(event: CalendarEvent): void {
    let alert = this.alertCtrl.create({
      title: event.title,
      message: event.start + ' to ' + event.end,
      buttons: ['OK']
    });
    alert.present();
  }
 
  eventTimesChanged({event, newStart, newEnd} : CalendarEventTimesChangedEvent): void {
    if (this.isDragging) {
      return;
    }
    this.isDragging = true;
 
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
 
    setTimeout(() => {
      this.isDragging = false;
    },1000);
  }
 
  hourSegmentClicked(event): void {
    let newEvent: CalendarEvent = {
      start: event.date,
      end: addHours(event.date, 1),
      title: 'Ajouter event',
      cssClass: 'custom-event',
      color: {
        primary: '#488aff',
        secondary: '#bbd0f5'
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
 
    this.events.push(newEvent);
    this.refresh.next();
  }
 
  presentPopover(event) {
    let popover = this.popoverCtrl.create(MypopoverPage);
  
   
    popover.present({
      ev:event
    });
  } */
  loadEvents() {
    this.eventSource = this.getEventsAgenda();
}
onViewTitleChanged(title) {
    this.viewTitle = title;
}
onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
}
changeMode(mode) {
    this.calendar.mode = mode;
}
today() {
    this.calendar.currentDate = new Date();
}
onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
        (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
}
onCurrentDateChanged(event:Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
}
createRandomEvents() {
    var events = [];
    for (var i = 0; i < 50; i += 1) {
        var date = new Date();
        var eventType = Math.floor(Math.random() * 2);
        var startDay = Math.floor(Math.random() * 90) - 45;
        var endDay = Math.floor(Math.random() * 2) + startDay;
        var startTime;
        var endTime;
        if (eventType === 0) {
            startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
            if (endDay === startDay) {
                endDay += 1;
            }
            endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
           events.push({
                title: 'All Day - ' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: false
            });
        } else {
            var startMinute = Math.floor(Math.random() * 24 * 60);
            var endMinute = Math.floor(Math.random() * 180) + startMinute;
            startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
            endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
            //alert(startTime)
            /* events.push({
                title: 'Event - ' + i,
               
                startTime: startTime,
                endTime: endTime,
                allDay: false
            });*/
        }
    }
    return events;
}
onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
}
markDisabled = (date:Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
};
//
presentPopover(event) {
  let popover = this.popoverCtrl.create(MypopoverPage);

 
  popover.present({
    ev:event
  });
}
}
