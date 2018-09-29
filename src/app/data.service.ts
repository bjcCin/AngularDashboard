import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get("/data/2.5/weather?q=Warren&appid=b6907d289e10d714a6e88b30761fae22")
      .map(result => result);
  }

  populacaoLimitada(age){
    let pais= "Brazil";
    let resposta;
    return this._http.get("/1.0/population/"+pais+'/'+age.toString()+"/?format=json")
      .map(result => result);
  }
}