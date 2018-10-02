import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'db-population-vs-happiness',
  templateUrl: './population-vs-happiness.component.html'
})
export class PopulationVsHappinessComponent implements OnInit {

  bubleChart: any 

  constructor() { }

  ngOnInit() {
    
    this.bubleChart = new Chart('bubble-chart', {
      type: 'bubble',
      data: {
          labels: ["0-10"],
          datasets: [
          {
            label: 'China',
            data: [{
              x: 23120,
              y: 5.245,
              r: 19.5
            }],
            backgroundColor: "rgba(255,221,50,0.2)",
            borderColor: "rgba(255,221,50,1)"
          },
          {
            label: "EUA",
            backgroundColor: "rgba(60,186,159,0.2)",
            borderColor: "rgba(60,186,159,1)",
            data: [{
              x: 19360,
              y: 7.526,
              r: 4.905
            }]
          },
          {
            label: "México",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "#000",
            data: [{
              x: 2406,
              y: 6.994,
              r: 1.86
            }]
          },
          {
            label: "Japan",
            backgroundColor: "rgba(193,46,12,0.2)",
            borderColor: "rgba(193,46,12,1)",
            data: [{
              x: 5405,
              y: 5.921,
              r: 1.89
            }]
          },
          {
            label: "Brazil",
            backgroundColor: "rgba(201, 161, 218, 0.2)",
            borderColor: "rgba(193,46,12,1)",
            data: [{
              x: 3219,
              y: 5.921,
              r: 4
            }]
          },
          {
            label: "Denmark",
            backgroundColor: "rgba(60,186,159,0.2)",
            borderColor: "rgba(60,186,159,1)",
            data: [{
              x: 2855,
              y: 7.526,
              r: 1.2
            }]
          }
          

        ]
      },
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }, scales: {
          yAxes: [{ 
            scaleLabel: {
              display: true,
              labelString: "Happiness"
            }
          }],
          xAxes: [{ 
            scaleLabel: {
              display: true,
              labelString: "GDP (PPP)"
            }
          }]
        }
      }
  });

  }

}
