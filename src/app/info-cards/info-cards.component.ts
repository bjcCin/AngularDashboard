import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'db-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.css']
})
export class InfoCardsComponent implements OnInit {

  constructor() { }

  populacaoTotal = 214101377
  nascidosNesteAno = 2389242
  populacaoMasculina = 105328268
  populacaoFeminina = 108773109


  ngOnInit() {
    setInterval(()=> {
      this.populacaoTotal = this.populacaoTotal + 1
      this.nascidosNesteAno = this.nascidosNesteAno +1 
    },20000);

    setInterval(()=> {
      this.populacaoFeminina = this.populacaoFeminina + 1 
    },20000);

    }
}


