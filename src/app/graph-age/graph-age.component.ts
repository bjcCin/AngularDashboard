import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'db-graph-age',
  templateUrl: './graph-age.component.html',
  styleUrls: ['./graph-age.component.css']
})

export class GraphAgeComponent implements OnInit {
  chart : any;
  constructor(private _brazil: DataService) {  };
  ngOnInit(){
    let request;
    let anoInicial = 1960;
    anoInicial -= 1950;//Normalize
    let anoFinal = 2015;
    anoFinal -= 1950;//Normalize
    let age = 106;
    this._brazil.populacaoLimitada(age).subscribe(res => {
        request = res;
        //Aqui o index é o ano (sendo 1950 = 0 e 2000=50 e etc. Dessa forma: ANO = index+1950)
        let label = [];
        let datas =[]
        for(var i=anoInicial; i<=anoFinal;i++){
          console.log('populacao no ano', request[i]['year'],' é: ', request[i]['total']);
          //Consulta por ano.
          label.push(request[i]['year']);
          datas.push(request[i]['total'].toString());
        }

        this.chart = new Chart('canvas', {
        //Resolver aqui as coisas do grafico.
          type:'line',
          data: {
            labels:label,
            datasets: [{
                data: datas,
                label:'População',
                borderColor: 'rgba(255, 0, 0, 0.6)',
                backgroundColor:'rgba(255, 0, 0, 0.2)',
                fill:true,
                showLine: true,
            }]
          },
          options:{
            title:{
              display: true,
              text: 'População brasileira com '+age.toString()+ ' anos de idade ao longo dos anos.'
            },
            showLines: true, // disable for all datasets
            legend:{
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        });
      });
  };
}