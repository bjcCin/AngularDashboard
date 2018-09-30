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

      const x = Object.values(res)
        
      for(let i=0; i<100; i=i+10){
        this.mulher.push(this.getSumResult(x,i,i+10,"females"))
        this.homem.push(this.getSumResult(x,i,i+10,"males"))
      }

      this.mulher = this.mulher.map(res=>res*-1)


      if(this.primeiraVez) {

        this.chart2 = new Chart('canvas2', {
        type: 'horizontalBar',
        data: {
            labels: ["0-10", "10-20", "20-30", "30-40", "40-50", "50-60", "60-70", "70-80", "80-90", "90-100"],
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

}
