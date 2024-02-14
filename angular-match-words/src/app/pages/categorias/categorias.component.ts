import { Component, OnInit } from '@angular/core';
import Lista from 'src/assets/data/match_words.json';
import { Categoria, Objeto } from 'src/assets/interface/match.interface';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  listCategorias!: Categoria[];
  ngOnInit(): void {
    if (Lista) {
      console.log( typeof Lista.categorias );

      this.listCategorias = Lista.categorias;
      console.log(this.listCategorias);
      
    }
  }

}
