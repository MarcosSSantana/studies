import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  produtos: string[] = [];
  menuType: string;
  constructor() {
    this.menuType = 'admin';
    this.produtos = ['mouse', 'teclado', 'cabo', 'fonte', 'teste'];
  }

  adicionar() {
    this.produtos.push('marcos');
  }

  remover(index: number) {
    this.produtos.splice(index, 1);
  }
}
