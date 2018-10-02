import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'



@Component({
  selector: 'db-graphs-pyramid',
  templateUrl: './pyramid-graphic.component.html',
  styleUrls: ['./pyramid-graphic.component.css']
})

export class PyramidGraphicComponent implements OnInit {

  chart2: any;
  date: {year: number, month: number};
  ano: number = 2018
  data: Date
  mulher = []
  homem = []
  primeiraVez = true
  labels = []
  divisaoPiramide = 10
  opcoes= [3, 5, 10]


  onValueChange(value: Date): void{
    this.ano = value.getFullYear()
    this.ngOnInit()
  }

  
  constructor(private _weather: DataService) {  }
  
  ngOnInit() {
      this._weather.worldPopAPI(this.ano)
      .subscribe(res => {
        
      this.mulher = []
      this.homem = []
      this.labels = []

      const x = Object.values(res)
        
      for(let i=0; i<100; i=i+this.divisaoPiramide){
        this.mulher.push(this.getSumResult(x,i,i+this.divisaoPiramide,"females"))
        this.homem.push(this.getSumResult(x,i,i+this.divisaoPiramide,"males"))
        this.labels.push(`${i}-${i+this.divisaoPiramide}`)
      }

      this.mulher = this.mulher.map(res=>res*-1)


      if(this.primeiraVez) {

        this.chart2 = new Chart('canvas2', {
        type: 'horizontalBar',
        data: {
            labels: this.labels,
            datasets: [{
                label: 'Mulheres',
                data: this.mulher,
                backgroundColor: 'rgba(201, 161, 218, 0.2)',
                borderWidth: 1
            },
            {
              label: 'Homens',
              data: this.homem,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderWidth: 1
            }
            

          ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    stacked: true
                }],
                xAxes: [{
                  ticks: {
                    callback: function(value, index, values) {
                      if(value < 0) return value*-1
                      else return value 
                    }
                  }
                }]
            }
        }
      })
    } else {
      this.chart2.data.datasets[0].data = this.mulher
      this.chart2.data.datasets[1].data = this.homem
      this.chart2.data.labels = this.labels
      console.log("mulher",this.mulher, "homem",this.homem, "labels",this.labels)
      this.chart2.update()
    }
    
    this.primeiraVez = false
                        
       }
      )

  }

  getSumResult(array, inicio: number, fim: number, sexo: string){  
    return array.reduce(function(sum, record){
      if(record["age"] <= fim && record["age"] >= inicio) return sum + record[sexo];
      else return sum;
    }, 0);
  }

  divisaoPiramideChange(){
    var x = this.divisaoPiramide + " "
    var y = parseInt(x)
    this.divisaoPiramide = y
    this.ngOnInit()
  }

}
