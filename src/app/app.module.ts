import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { FormsModule }   from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
>>>>>>> master


import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { GraphsComponent } from './graphs/graphs.component';
import { Graphs2Component } from './graphs2/graphs2.component';
import { PyramidGraphicComponent } from './graphs/pyramid-graphic/pyramid-graphic.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfoCardsComponent,
    GraphsComponent,
    Graphs2Component,
    PyramidGraphicComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
=======
    RouterModule.forRoot(ROUTES),
    FormsModule,
    BsDatepickerModule.forRoot()
>>>>>>> master
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
