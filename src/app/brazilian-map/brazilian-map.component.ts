import { Component, OnInit } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { areasHomicidios } from './homicidios-por-estado'
import { areasPopulacao } from './populacao-por-estado'

@Component({
  selector: 'db-brazilian-map',
  templateUrl: './brazilian-map.component.html',
  styleUrls: ['./brazilian-map.component.css']
})
export class BrazilianMapComponent implements OnInit {

  constructor(private AmCharts: AmChartsService) { }

  control: any = {
    anoInicial: 1960,
    anoFinal:2017,
    age: "Populacao por estados"
  };

  map: any

  areas = areasPopulacao

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    this.map = this.AmCharts.makeChart( "chartdiv", {
      "type": "map",
      "theme": "light",
      "colorSteps": 10,
    
      "dataProvider": {
        "map": "brazilLow",
        "areas": this.areas
      },
    
      "areasSettings": {
        "autoZoom": false
      },
    
      "valueLegend": {
        "right": 10,
        "minValue": "menos populoso",
        "maxValue": "mais populoso"
      },
  
      "export": {
        "enabled": true
      }
    
    } );
    
  }

  opcoesMapa = ["Populacao por estados", "Violencia por estados"]
  controlSubmit(form){
    console.log(form)
    if(form.value.tipoMapa == "Violencia por estados" ){
      this.AmCharts.updateChart(this.map, () => {
        // Change whatever properties you want
        this.map.dataProvider.areas = areasHomicidios;
      }); 

    }
    else {
      this.AmCharts.updateChart(this.map, () => {
        // Change whatever properties you want
        this.map.dataProvider.areas = areasPopulacao;
      }); 
        
    }
  }

  

}
