import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { Chart } from 'chart.js';

@Component({
  selector: 'db-poke-api',
  templateUrl: './poke-api.component.html',
  styleUrls: ['./poke-api.component.css']
})
export class PokeApiComponent implements OnInit {

  constructor(private _api: DataService) {  };
  datas:any = [];
  labels:any=[];
  chart:any;
  filter:any={
    graph:0
  }
  name:string='';
  firstTime:boolean=true;
  colors:any=[
    'rgb(127,66,0)',
    'rgb(225,169,76)',
    'rgb(127,84,38)',
    'rgb(225,132,0)',
    'rgb(204,106,0)',
    'rgb(127,75,0)',
    'rgb(225,182,77)',
    'rgb(225,150,1)',
    'rgb(225,206,77)',
    'rgb(225,185,1)',
    'rgb(127,66,0)',
    'rgb(225,169,76)',
    'rgb(127,84,38)',
    'rgb(225,132,0)',
    'rgb(204,106,0)',
    'rgb(127,75,0)',
    'rgb(225,182,77)',
    'rgb(225,150,1)',
    'rgb(127,91,39)',
    'rgb(127,75,0)',
    'rgb(127,93,0)',
    'rgb(225,206,77)',
    'rgb(225,185,1)',
  ]

  createChart(){
    this.chart = new Chart('canvasPoke', {
      type: 'horizontalBar',
      data: {
        labels:this.labels,
        datasets: [{
            data: this.datas,
            label:this.name,
            borderColor: '',
            backgroundColor: this.colors,
            fill:true,
            showLine: true,
        }]
      },
      options:{
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
    this.firstTime=false;
  }

  controlGraph(form){
    this.chart.destroy();
    console.log('destroy');
    this.filter.graph = parseInt(form.value.showGraph,10);
    this.ngOnInit();
  }

  allTypesAndPokemons(request,numTipos){
    this.name='Pokemons';
    for(let i=0; i<numTipos; i++){
      let req;
      this._api.pokeApiPokemons(request.results[i].name).subscribe(result=>{
        req = result;
        this.labels[i] = request.results[i].name;
        this.datas[i] = req.pokemon.length;
        // console.log(req.moves.length);
        if(i==numTipos-1){
          this.chart = new Chart('canvasPoke', {
            type: 'horizontalBar',
            data: {
              labels:this.labels,
              datasets: [{
                  data: this.datas,
                  label:this.name,
                  borderColor: '',
                  backgroundColor: this.colors,
                  fill:true,
                  showLine: true,
              }]
            },
            options:{
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
        }
      });
    };
  }


  allTypesMoves(request, numTipos){
    this.name = 'Ataques';
    for(let i=0; i<numTipos; i++){
      let req;
      this._api.pokeApiPokemons(request.results[i].name).subscribe(result=>{
        req = result;
        this.labels[i] = request.results[i].name;
        this.datas[i] = req.moves.length;
        if(i==numTipos-1){
          this.chart = new Chart('canvasPoke', {
            type: 'horizontalBar',
            data: {
              labels:this.labels,
              datasets: [{
                  data: this.datas,
                  label:this.name,
                  borderColor: '',
                  backgroundColor: this.colors,
                  fill:true,
                  showLine: true,
              }]
            },
            options:{
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
        }
      });
    };
  }

  ngOnInit() {
    let request;
    this._api.pokeApiTypes().subscribe(res=>{
      request = res;
      let numTipos = request.count;
      switch(this.filter.graph){
        case 0:
          this.allTypesAndPokemons(request,numTipos);
          break;
        case 1:
          this.allTypesMoves(request,numTipos);
          break;
      }
    });
  }
}
