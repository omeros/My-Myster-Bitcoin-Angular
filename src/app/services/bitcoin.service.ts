import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UtilService } from './util.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }


  // import React from 'react';
  // import axios from '../lib/axios.js';





  //*********not working , why ? ****/
  // public getMarketPrice() {
  //   return this.http.get<{ answer: string }>('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')
  //     .pipe(
  //       map(res => res.answer)
  //     )
  // }


  // activate this after app launch
   public async getMarketPrice() {
       // return axios.get("https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true")
       // return axios.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true")
      //  return axios.get("https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true")
      //      .then(res => {
      //          console.log('Service Got getMarketPrice :', res);
      //          return res.data;
      //      })
      //      .catch(err => {
      //          console.log('Service got Error:', err);
      //      })
      return localStorage.getItem('data')        // delete this after app launch
   }


   //******/ why this one doesnt work ? /************/
   getRate() {
    // return this.http.get<{ answer: number }>('https://blockchain.info/tobtc?currency=USD&value=1')
    //return this.http.get<any>('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')
    return this.http.get<any>('https://blockchain.info/tobtc?currency=USD&value=1')
      .pipe(
        map(res => res)
      )

  }

  // public async getRate() {
  //   return axios.get("https://blockchain.info/tobtc?currency=USD&value=1")
  //     .then(res => {
  //       console.log('Service Got getRate:', res);
  //       return res.data;
  //     })
  //     .catch(err => {
  //       console.log('Service got Error:', err);
  //     })
  // }






}
