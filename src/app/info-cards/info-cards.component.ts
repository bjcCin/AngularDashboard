import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'db-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.css']
})
export class InfoCardsComponent implements OnInit {

  constructor() { }

  populacaoTotal = 214101377
  populacaoMundial = 2800000
  populacaoMasculina = 105328268
  populacaoFeminina = 108773109

  populacaoTotalF = "214.101.377"
  populacaoMundialF = "2.800.000"
  populacaoMasculinaF = "105.328.268"
  populacaoFemininaF = "108.773.109"

  ngOnInit() {
    setInterval(()=> {
      this.populacaoTotal = this.populacaoTotal + 1
      this.populacaoTotalF = this.formatMoney(this.populacaoTotal)
      this.populacaoMundial = this.populacaoMundial + 3
      this.populacaoMundialF = this.formatMoney(this.populacaoMundial)
    },2000);

    setInterval(()=> {
      this.populacaoFeminina = this.populacaoFeminina + 1
      this.populacaoFemininaF =  this.formatMoney(this.populacaoFeminina)
    },3000);

    setInterval(()=> {
      this.populacaoMasculina = this.populacaoMasculina + 1
      this.populacaoMasculinaF =  this.formatMoney(this.populacaoMasculina)
    },4000);



    console.log("Numero",Math.floor(Math.log10(this.populacaoFeminina)+1))
    console.log("format", this.formatMoney(this.populacaoFeminina))

    }

    formatMoney(amount, decimalCount = 0, decimal = ".", thousands = ".") {
      try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
        length = Math.floor(Math.log10(amount)+1)

        const negativeSign = amount < 0 ? "-" : "";
    
        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let iNovo = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
        let j = (length > 3) ? length % 3 : 0;
    
        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + 
          Math.abs(amount - iNovo).toFixed(decimalCount).slice(2) : "");
      } catch (e) {
        console.log(e)
      }
    };
}


