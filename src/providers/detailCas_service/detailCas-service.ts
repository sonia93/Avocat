import { Http ,Headers} from '@angular/http';
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
//

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
let apiUrl = 'http://avocanet.tn/api/WSCas/GetDetailCas?CasId=2039';


@Injectable()
export class detailServiceProvider {
 

 
    data: any;  
  constructor(public http: Http) {
   
  }

 public getdetailCas(id){
   
    const apiUrl = 'http://avocanet.tn/api/WSCas/GetDetailCas?CasId='+id;
    
    return new Promise(resolve => {
      this.http.get(apiUrl)
    
     .subscribe(data => {
       
          var detailCas = data.json();
          console.log("detailCas"+detailCas);
        resolve(detailCas);
          
      }, err => {
        console.log(err);
        resolve(null);
      })
    });
 }
 

}