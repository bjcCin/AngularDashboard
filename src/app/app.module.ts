import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { GraphsComponent } from './graphs/graphs.component';
import { Graphs2Component } from './graphs2/graphs2.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfoCardsComponent,
    GraphsComponent,
    Graphs2Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
