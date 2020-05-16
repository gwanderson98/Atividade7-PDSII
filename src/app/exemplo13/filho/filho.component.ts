import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input() recebeFamilia;

  @Output() respostaFamilia;

  constructor() { }

  ngOnInit() {
    console.log(this.recebeFamilia);
    console.log("Objeto familia recebido do component pai via input: ", this.recebeFamilia);
  }

  feedback(){
    console.log("Resposta para o component pai ", this.respostaFamilia.emmit({"nome":"Raimundo","sobrenome":"nonato"}));
  }

}
