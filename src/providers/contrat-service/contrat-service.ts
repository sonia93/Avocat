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
export class ContratServiceProvider {
 
    data: any;  
  constructor(public http: Http) {
   
  }

 public getcontrat(id){
    const apiUrl = 'http://avocanet.tn/api/WSCas/Get?AvocatId='+id;
    
    return new Promise(resolve => {
      this.http.get(apiUrl)
    
     .subscribe(data => {
       
          var contart = data.json();
          console.log("Contentieux"+contart);
        resolve(contart);
          
      }, err => {
        console.log(err);
        resolve(null);
      })
    });
 }
 

}