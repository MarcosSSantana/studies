import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent {

  estilo: string = "disable";
  corfundo: string = 'red';
  corFonte: string = 'blue';
  item: string = '';
  list: string[] = [];
  isEnableBlock :boolean = true;
  constructor() {

  }

  adicionarLista() {
    this.list.push(this.item);
    this.item = '';
  }

  trocar() {
    if (this.estilo == "disable") {
      this.estilo = "enable";
    } else {
      this.estilo = "disable";
    }
  }
}
