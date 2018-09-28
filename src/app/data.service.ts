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

  //   for(index=0; index<orgaos.length; index++){
  //     this._http.get("/api-de-dados/despesas/por-orgao?ano=2014&orgao=" + orgaos[index] +"&pagina=1")
  //     .map(result => result = result[0])
  //     .subscribe(uf => {
  //       console.log(uf.orgao)
  //   });
  // }
  return this._http.get("/api-de-dados/despesas/por-orgao?ano=2014&orgao=26231&pagina=1")
  .map(result => result);

  }


  worldPopAPI(){
    return this._http.get("/1.0/population/2018/Brazil/?format=json")
    .map(result => result);
  }

  worldPopAPI2(){
    return this._http.get("/1.0/mortality-distribution/Brazil/male/49y2m/today/")
    .map(result => result);
  }


}