import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AmChartsModule } from "@amcharts/amcharts3-angular";



import {ROUTES} from './app.routes';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';


import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { GraphsComponent } from './graphs/graphs.component';
import { Graphs2Component } from './graphs2/graphs2.component';
import { PyramidGraphicComponent } from './graphs/pyramid-graphic/pyramid-graphic.component';
import { GraphAgeComponent } from './graph-age/graph-age.component';
import { DistributionAgeSexComponent } from './distribution-age-sex/distribution-age-sex.component';
import { PopulationVsHappinessComponent } from './population-vs-happiness/population-vs-happiness.component';
import { HistoricalBcComponent } from './historical-bc/historical-bc.component';
import { BrazilianMapComponent } from './brazilian-map/brazilian-map.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfoCardsComponent,
    GraphsComponent,
    DistributionAgeSexComponent,
    Graphs2Component,
    PyramidGraphicComponent,
    GraphAgeComponent,
    PopulationVsHappinessComponent,
    HistoricalBcComponent,
    BrazilianMapComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    BsDatepickerModule.forRoot(),
    AmChartsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
