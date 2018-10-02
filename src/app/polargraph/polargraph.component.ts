import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'db-polargraph',
  templateUrl: './polargraph.component.html',
  styleUrls: ['./polargraph.component.css']
})
export class PolargraphComponent implements OnInit {

  pChart: any;
  
  constructor() { }

  ngOnInit() {
    this.pChart = new Chart('pArea', {
      type: 'polarArea',
      data: {
          datasets: [{
              data: [44, 23, 22],
              backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(201, 161, 218, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(201, 161, 218, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }],
          labels: [
            'Bolsonaro',
            'Marina',
            'Haddad'
          ]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  },
                  scaleLabel: {
                    display: true,
                    labelString: '$'
                  }
                  
              }]
          }
      }
  });
  }

}
