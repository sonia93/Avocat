import { Http ,Headers} from '@angular/http';
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
//

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


//let apiUrl = 'http://avocanet.tn/api/WSCas/Get?AvocatId=1007';
@Injectable()
export class ContentieuxServiceProvider {
 

  //[x: string]: any;
  //apiUrl: string;
 // apiUrl = 'http://avocanet.tn/api/WSClient/Get?AvocatId=1007 ';
    data: any;  
  constructor(public http: Http) {
    //console.log("Hello clientServiceProvider Provider");
  //  this.data = null;
  }/*
  contentieux1(credentials) {
    
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(apiUrl, JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });

  }*/



 public getcontentieux(id){
    const apiUrl = 'http://avocanet.tn/api/WSCas/Get?AvocatId='+id;
    
    return new Promise(resolve => {
      this.http.get(apiUrl)
    
     .subscribe(data => {
       
          var Contentieux = data.json();
          console.log("Contentieux"+Contentieux);
        resolve(Contentieux);
          
      }, err => {
        console.log(err);
        resolve(null);
      })
    });
 }
 
 
 
 /*
 public getcontentieux(id){
  const apiUrl = 'http://avocanet.tn/api/WSCas/Get?AvocatId=1007'+id;
  
  return new Promise(resolve => {
    this.http.get(apiUrl)
  
   .subscribe(data => {
     
        var WSCas = data.json();
        console.log("WSCas"+WSCas);
      resolve(WSCas);
        
    }, err => {
      console.log(err);
      resolve(null);
    })
  });
}*/

 /* 
load() {
  if (this.data) {
    // already loaded data
    return Promise.resolve(this.data);
  }
 
  // don't have the data yet
  return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    this.http.get('http://avocanet.tn/api/WSCas/Get?AvocatId=1007')
   
    .subscribe(data => {
      // we've got back the raw data, now generate the core schedule data
      // and save the data for later reference
      this.data = data;
      resolve(this.data);
      console.log ("data"+JSON.stringify(data));
    });
  });
}*/

}