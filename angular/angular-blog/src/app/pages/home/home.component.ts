import { Component } from '@angular/core';
import { Post } from 'src/app/shared/post.interface';
import dados from 'src/assets/data/posts.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posts: Post[];

  constructor() {
    this.posts = dados.posts
  }
}
