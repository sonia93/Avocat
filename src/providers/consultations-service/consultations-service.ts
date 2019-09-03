import { Http ,Headers} from '@angular/http';
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
//

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
let apiUrl = 'http://avocanet.tn/api/WSCas/Get?AvocatId=1007';


@Injectable()
export class ConsultationServiceProvider {
 

 
    data: any;  
  constructor(public http: Http) {
   
  }

 public getconsultation(id){
    const apiUrl = 'http://avocanet.tn/api/WSCas/Get?AvocatId='+id;
    
    return new Promise(resolve => {
      this.http.get(apiUrl)
    
     .subscribe(data => {
       
          var Consultation = data.json();
          console.log("Consultation"+Consultation);
        resolve(Consultation);
          
      }, err => {
        console.log(err);
        resolve(null);
      })
    });
 }
 

}