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
              x: 1372470000,
              y: 5.245,
              r: 15
            }],
            backgroundColor: "rgba(255,221,50,0.2)",
            borderColor: "rgba(255,221,50,1)"
          },
          {
            label: "EUA",
            backgroundColor: "rgba(60,186,159,0.2)",
            borderColor: "rgba(60,186,159,1)",
            data: [{
              x: 325000000,
              y: 7.526,
              r: 10
            }]
          },
          {
            label: "México",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "#000",
            data: [{
              x: 127000000,
              y: 6.994,
              r: 15
            }]
          },
          {
            label: "Japan",
            backgroundColor: "rgba(193,46,12,0.2)",
            borderColor: "rgba(193,46,12,1)",
            data: [{
              x: 127000000,
              y: 5.921,
              r: 15
            }]
          },
          {
            label: "Brazil",
            backgroundColor: "rgba(201, 161, 218, 0.2)",
            borderColor: "rgba(193,46,12,1)",
            data: [{
              x: 207000007,
              y: 5.921,
              r: 15
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
