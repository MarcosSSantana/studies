import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Opcao from 'src/assets/data/match_words.json';
import { Categoria } from 'src/assets/interface/match.interface';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  title: string = "";
  categoria?: Categoria;
  id: number = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let idParam = this.route.snapshot.paramMap.get('id')
    this.id = parseInt(idParam || "");

    if (Opcao) {
      this.categoria = Opcao.categorias.find(categoria =>categoria.id === this.id);

      console.log(this.categoria);
      if(this.categoria){
        this.title = this.categoria?.categoria

      }

    }
  }



}
