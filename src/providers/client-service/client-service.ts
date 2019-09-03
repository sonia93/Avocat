import { Http ,Headers} from '@angular/http';
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
//

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import xml2js from 'xml2js';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators/catchError';
import { tap } from 'rxjs/operators';
let apiUrl = 'http://avocanet.tn/api/WSClient/Get?AvocatId=1007';
@Injectable()
export class ClientServiceProvider {
 Myclient:any;

  [x: string]: any;
  apiUrl: string;
 // apiUrl = 'http://avocanet.tn/api/WSClient/Get?AvocatId=1007 ';
    data: any;
  constructor(public http: Http) {
    console.log("Hello clientServiceProvider Provider");
    this.data = null;
  }
  cli(credentials) {
    
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

}




 /* loadXML(credentials) {
    
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
      this.http.get('http://avocanet.tn/api/WSClient/Get?AvocatId=1007')
     
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data = data;
        resolve(this.data);
        console.log ("data"+JSON.stringify(data));
      });
    });
  }*/
  

  public getclientdata(id){
    const apiUrl = 'http://avocanet.tn/api/WSClient/Get?AvocatId='+id;
    
    return new Promise(resolve => {
      this.http.get(apiUrl)
    
     .subscribe(data => {
       
          var WSClient = data.json();
          console.log("WSClient"+WSClient);
        resolve(WSClient);
          
      }, err => {
        console.log(err);
        resolve(null);
      })
    });
  }
  
  addUser(Nom,Prenom,Cin,Adresse,TelFixe,TelMobile,Email,DateNaissance,DateInscription,IdAvocat,CodePostal,Ville,RaisonSocial,NumSiret,NumTVA,Interlocuteur) {
    let headers = new HttpHeaders();
     
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");
       /*let body = new FormData();
    
    body.append('Nom',Nom);
    body.append('Prenom', Prenom);
    body.append('Cin', Cin);
    body.append('Adresse', Adresse);
    body.append('TelFixe', TelFixe);
    body.append('TelMobile', TelMobile);
    body.append('Email', Email);
    body.append('DateNaissance', DateNaissance);
    body.append('Adresse', DateInscription);
    body.append('IdAvocat', IdAvocat);
    body.append('CodePostal', CodePostal);
    body.append('Ville', Ville);
    body.append('RaisonSocial', RaisonSocial);
    body.append('NumSiret', NumSiret);
    body.append('NumTVA', NumTVA);
    body.append('Interlocuteur', Interlocuteur);
    */
let body ={
  "Nom": ""+Nom+"",
  "Prenom":""+Prenom+"",
  "Cin" : ""+Cin+"",
  "Adresse" : ""+Adresse+"",
  "TelFixe" : ""+TelFixe+"", 
  "TelMobile" : ""+TelMobile+"",
  "Email" : ""+Email+"",
  "DateNaissance" : ""+DateNaissance+"",
  "DateInscription" : ""+DateInscription+"",
  "IdAvocat" : ""+IdAvocat+"",
  "CodePostal" : ""+CodePostal+"",
  "Ville" : ""+Ville+"",
  "RaisonSocial" : ""+RaisonSocial+"",
  "NumSiret" : ""+NumSiret+"",
  "NumTVA" : ""+NumTVA+"",
  "Interlocuteur" : ""+Interlocuteur+""
};
    

    const apiUrl = 'http://avocanet.tn/api/WSAddClient/Add';
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl, body )
      .subscribe(res => {
        //var WSClient = res.json();

        resolve(res);
        //alert(res)
      }, (err) => {
        reject(err);
      });
  });
  }
   
  deleteClient(ID):any {
    let result:any;
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    this.http.delete('http://avocanet.tn/api/WSClient/Get?AvocatId=1007'+ID,{headers: headers})
    .map(res => res)
    .subscribe(data =>{
      var WSClient = data.json();
          result = data;  
     });

    return result;
  }//
  /** DELETE: delete client from the server */
deleteClient1 (myclient: any | number): Observable<any> {
  const id = typeof myclient === 'number' ? myclient : myclient.ID;
  const url = `${this.apiUrl}/${id}`;

  return this.http.delete('http://avocanet.tn/api/WSClient/Get?AvocatId=1007').pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
   // catchError(this.handleError<Myclient>('deleteHero'))
  );
}

   /////////// 
 
  //
 
/*
parseXML(data)
{
   return new Promise(resolve =>
   {
      var k,
          arr    = [],
          parser = new xml2js.Parser(
          {
             trim: true,
             explicitArray: true
          });

      parser.parseString(data, function (err, result)
      {
         var obj = result.comics;
         for(k in obj.publication)
         {
            var item = obj.publication[k];
            arr.push({
                Adresse           : item.Adresse[0],
                Cin        : item.Cin[0],
                DateInscription : item.DateInscription[0],
                DateNaissance        : item.DateNaissance[0]
            });
         }

         resolve(arr);
      });
   });
}*/
}