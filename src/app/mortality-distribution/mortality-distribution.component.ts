import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'db-mortality-distribution',
  templateUrl: './mortality-distribution.component.html',
  styleUrls: ['./mortality-distribution.component.css']
})

export class MortalityDistribution implements OnInit{

  mortalityChart: any;
  ages = [];
  percent = [];

  constructor(private __mortality: DataService ) { }

  ngOnInit() {
    this.__mortality.mortalityDistribution()
    .subscribe(res => {
      
      for(var i = 1; i < 8; i++){
        this.ages.push(res['mortality_distribution'].map(res => res.age)[i]+" anos");
        this.percent.push(res['mortality_distribution'].map(res => res.mortality_percent)[i].toFixed(2));
    }

      this.mortalityChart = new Chart('pie_mortality',{
        type: 'doughnut',
        data: {
          labels: this.ages,

          datasets: [{
            data: this.percent,
            backgroundColor: [
              'rgba(255,165,0,0.2)',
              'rgba(153,50,204,0.2)',
              'rgba(0,0,205,0.2)',
              'rgba(255,69,0,0.2)',
              'rgba(46,139,87,0.2)',
              'rgba(218,165,32,0.2)',
              'rgba(0,191,255,0.2)'
          ],
          borderColor: [
              'rgba(255,165,0,1)',
              'rgba(153,50,204,1)',
              'rgba(0,0,205,1)',
              'rgba(255,69,0,1)',
              'rgba(46,139,87,1)',
              'rgba(218,165,32,1)',
              'rgba(0,191,255,1)'
          ],
          borderWidth: 1
          }],
        }
      })

    })

  }
}
