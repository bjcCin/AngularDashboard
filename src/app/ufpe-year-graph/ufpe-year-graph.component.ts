import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'db-ufpe-year-graph',
  templateUrl: './ufpe-year-graph.component.html',
  styleUrls: ['./ufpe-year-graph.component.css']
})

export class UfpeYearGraphComponent implements OnInit {
  chart : any;
  constructor(private _brazil: DataService) {  }

  ngOnInit(){
    let request;
    let anoInicial = 2015;
    anoInicial -= 1950;//Normalize
    let anoFinal = 2017;
    anoFinal -= 1950;//Normalize

    this._brazil.populacaoLimitada().subscribe(res => {
        request = res;
        //Aqui o index é o ano (sendo 1950 = 0 e 2000=50 e etc. Dessa forma: ANO = index+1950)
        for(var i=anoInicial; i<=anoFinal;i++){
          console.log('populacao no ano', request[i]['year'],' é: ', request[i]['total']);
          //Consulta por ano.
        }
        //Resolver aqui as coisas do grafico.
    });
  }
}