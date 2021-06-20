import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { delay, map } from 'rxjs/operators';
import { Column } from 'angular-google-charts';

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  // myChart : Array<object>
  myType = 'LineChart'
  columnNames = 'yExis'
  subscription: Subscription
  myChart = null
  myChartXY = null
  myWidth1 = 900
  myHeight1 = 500
  myWidth2 = 600
  myHeight2 = 600
  myTitle ='hello chart'
  myData = null
  ChartType = 'ColumnChart'
  ChartType2 = 'LineChart'
  ChartType3 = 'PieChart'




  constructor(private bitcoinService: BitcoinService) { }

  async ngOnInit() {
    // this.myChart = JSON.parse( await this.bitcoinService.getMarketPrice() )
   const data =  JSON.parse( await this.bitcoinService.getMarketPrice() )
    console.log(' data :',  data)
    this.myChartXY= data.map(data=>[data.x,data.y])
    console.log(' this.myChartXY :',  this.myChartXY)
    this.myChart = data
   this.myData =  [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000],
  ]
       // this.subscription = this.data.subscribe(answer => {
    // //  this.answer = answer
    //   console.log(' this.data fron the bitcoin service',  this.data)
    // })
  }

}
