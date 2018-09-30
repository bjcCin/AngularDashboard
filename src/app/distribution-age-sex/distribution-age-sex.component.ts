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
    idade: 55
  }

  myChart: any;
  sexo: any = [];

  onSubmit(form){
    this.filtro.idade = form.value.idade;
    this.filtro.ano = form.value.ano;
    this.ngOnInit();
  }

  anosIniciais = []
  idadesDisp = []

  startYears(){
    for(let i=1950;i<=2018;i++){
      this.anosIniciais.push(i);

    }
    for(let j=0;j<=100; j++){
      this.idadesDisp.push(j);
    }
  }

  constructor(private _distribution: DataService) { }

  ngOnInit() {
    this._distribution.distributionSex(this.filtro.ano)
      .subscribe( rt =>{
        this.startYears();
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