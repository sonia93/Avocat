import { Http ,Headers} from '@angular/http';
import { Injectable } from '@angular/core';

import { HttpHeaders  } from '@angular/common/http';
/*
  Generated class for the AgendaEventsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AgendaEventsProvider {

  constructor(public http: Http) {
    console.log('Hello AgendaEventsProvider Provider');
  }
  public getEvents(id){
    const apiUrl = 'http://avocanet.tn/api/Agenda/index?AvocatId='+id;
    
    return new Promise(resolve => {
      this.http.get(apiUrl)
    
     .subscribe(data => {
       
          var Agenda = data.json();
          console.log("EVENTS"+Agenda);
        resolve(Agenda);
          
      }, err => {
        console.log(err);
        resolve(null);
      })
    });
 }
}
