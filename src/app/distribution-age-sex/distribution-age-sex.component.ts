import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'db-distribution-age-sex',
  templateUrl: './distribution-age-sex.component.html',
  styleUrls: ['./distribution-age-sex.component.css']
})
export class DistributionAgeSexComponent implements OnInit {


  filtro: any = {
    ano: 2018,
    idade: 90
  }

  onSubmit(form){
    console.log('form');
    this.filtro = form.value;
    this.ngOnInit();
  }



  myChart: any;
  sexo: any = [];
  idade: number = 80;
  constructor(private _distribution: DataService) { }

  ngOnInit() {
    this._distribution.distributionSex()
      .subscribe( rt =>{
        console.log('ngonit');
        console.log(this.filtro.ano);

        this.sexo = [];
        this.sexo.push(rt[this.filtro.idade].males);
        this.sexo.push(rt[this.filtro.idade].females);

        this.myChart = new Chart('can', {
            type: 'pie',
            data: {
                labels: ['Masculino', 'Feminino'],
                datasets: [{
                    label: '# of Votes',
                    data: this.sexo,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
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
                        }
                    }]
                }
            }
        });
        
      }) //end chart
  }

}