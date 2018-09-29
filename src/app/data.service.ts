import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get("/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
      .map(result => result);
    
  } 
  
  despesasUFPE(){
    return this._http.get("/api-de-dados/despesas/por-orgao?ano=2014&orgao=26242&pagina=1")
      .map(result => result);
  }

  despesasUFPEAdson(orgao: number){
    const orgaos = [26231, 26232, 26233, 26234]
    let index:number = 0;
    let i:number =0;
    let dadosUf = []
    return this._http.get("/api-de-dados/despesas/por-orgao?ano=2014&orgao=26231&pagina=1")
      .map(result => result);

  }

  worldPopAPI(ano: number){
    return this._http.get(`/1.0/population/${ano}/Brazil/?format=json`)
    .map(result => result);
  }

  populacaoLimitada(age){
    let pais= "Brazil";
    let resposta;
    return this._http.get("/1.0/population/"+pais+'/'+age.toString()+"/?format=json")
      .map(result => result);
  }
}