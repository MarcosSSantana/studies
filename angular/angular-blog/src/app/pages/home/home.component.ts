import { Component } from '@angular/core';
import dados from 'src/assets/data/posts.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posts: any = "";

  constructor() {
    this.posts = dados.posts
  }
}
