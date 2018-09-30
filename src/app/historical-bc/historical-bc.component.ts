import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'db-historical-bc',
  templateUrl: './historical-bc.component.html',
  styleUrls: ['./historical-bc.component.css']
})
export class HistoricalBcComponent implements OnInit {

  
  myChart: any;
  datas = [];
  prices = [];
  primeiraVez = true;

  dataInicio: any = '2013-01-01';
  dataFim: any ='2013-05-01';

  onValueChange(value: Date): void{
    let day = value.getDate().toString().length < 2 ? +'0'+value.getDate().toString() : value.getDate().toString();
    let month: any = value.getMonth()+1; 
    month = month.toString()
    month = month.length < 2 ? +'0'+month : month;
    this.dataInicio = value.getFullYear()+'-'+month+'-'+day;
    this.primeiraVez = false;
  }

  onValueChange2(value: Date): void{
    let day = value.getDate().toString().length < 2 ? +'0'+value.getDate().toString() : value.getDate().toString();
    let month: any = value.getMonth()+1; 
    month = month.toString()
    month = month.length < 2 ? +'0'+month : month;
    this.dataFim = value.getFullYear()+'-'+month+'-'+day;
    this.primeiraVez = false;
    this.ngOnInit()
  }

  constructor(private _historico: DataService ) { }

  ngOnInit() {
    this._historico.historicalBc(this.dataInicio, this.dataFim)
      .subscribe(res =>{
        this.datas = Object.keys(res['bpi']);
        this.prices = Object.values(res['bpi']);

             this.myChart = new Chart('can', {
              type: 'line',
              data: {
                  labels: this.datas,
                  datasets: [{
                      label: 'BitCoin',
                      data: this.prices,
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
                  }]
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
          });//end chart
      });
  }

}
