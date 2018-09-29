import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
=======
import { FormsModule }   from '@angular/forms';

>>>>>>> master

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { GraphsComponent } from './graphs/graphs.component';
import { Graphs2Component } from './graphs2/graphs2.component';
<<<<<<< HEAD
import { MonthDatePickerComponent } from './month-date-picker/month-date-picker.component';
=======
import { PyramidGraphicComponent } from './graphs/pyramid-graphic/pyramid-graphic.component';
>>>>>>> master


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfoCardsComponent,
    GraphsComponent,
    Graphs2Component,
<<<<<<< HEAD
    MonthDatePickerComponent
=======
    PyramidGraphicComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
=======
    RouterModule.forRoot(ROUTES),
    FormsModule
>>>>>>> master
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
