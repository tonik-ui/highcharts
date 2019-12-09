import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hi-charts';
  chartDataT: any = [];
  chartDataN: any = [];
  highcharts = Highcharts;
  chartOptions = {   
    chart: {
      type: "spline",
      zoomType: 'x',
      panning: true,
      panKey: 'shift'
    },
    plotOptions: {
      line: {
          dataLabels: {
              enabled: true
          },
          series: {
            showInNavigator: true
         },
          enableMouseTracking: false
      }
    },
    title: {
       text: "Monthly Average Temperature"
    },
    subtitle: {
       text: "Source: WorldClimate.com"
    },
    yAxis: {          
       title:{
          text:"Temperature °C"
       }
    },
    xAxis: {
      type: 'datetime'
   },
    tooltip: {
       valueSuffix:" °C"
    },
    rangeSelector: {
      selected: 4
   },
    series: [
       {
          name: 'Tokyo',
          data: this.chartDataT
       }
      //  {
      //     name: 'New York',
      //     data: this.chartDataN
      //  },
      //  {
      //     name: 'Berlin',
      //     data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
      //  },
      //  {
      //     name: 'London',
      //     data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      //  }
    ]
 };

 ngOnInit() {
    let value = 50;
    for(let i = 0; i <  1000000; i++){
      // let date = new Date();
      // date.setHours(0,0,0,0);
      // date.setDate(i);
      value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      this.chartDataT.push(value);
    }
 }
}
