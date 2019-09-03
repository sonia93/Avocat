import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operator/map';
import { Observable } from 'rxjs/Observable';
import { LoadingController,Loading } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import * as xml2js from 'xml2js';

let apiUrl = 'http://avocanet.tn/api/WSAuthentification/calLogin';
//let apiUrl =  'http://avocanet.tn/api/WSAuthentification/calLogin?UserName=UserName&Password=Password';
@Injectable()

export class AuthServiceProvider {
  
   data: any;    
  
  constructor(public http: Http) {
    this.data = null;
    
  }

  login(credentials) {
    
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
 public LoginAvocanet(UserName,Password){
  
   //alert(UserName + Password)
    const apiUrl = 'http://avocanet.tn/api/WSAuthentification/calLogin?UserName='+UserName+'&Password='+Password;
    
    return new Promise(resolve => {
      this.http.get(apiUrl)
   
      .subscribe(data => {
       
        var resultt = data.json();
        //console.log('api result '+resultt.toString());   
        resolve(resultt);
        //console.log('api'+resultt);   
      }, err => {
        console.log(err);
        resolve(null);
      })
     });
    
   
  }
  /*
  loginNew(){
    const apiUrls = 'http://avocanet.tn/api/WSAuthentification/calLogin?UserName=demo&Password=mode';

   return new Promise(resolve => {
     this.http.get(apiUrls)
     
     .subscribe(data => {
         console.log(data);    
       resolve(data);
     }, err => {
       console.log(err);
       resolve(null);
     })
    });
  }
*/
  register(data) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(apiUrl+'guest/signup', JSON.stringify(data), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  logout(){
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('X-Auth-Token', localStorage.getItem('token'));

        this.http.post(apiUrl+'logout', {}, {headers: headers})
          .subscribe(res => {
            localStorage.clear();
          }, (err) => {
            reject(err);
          });
    });
  }


}
