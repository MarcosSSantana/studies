import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/shared/post.interface';
import data from 'src/assets/data/posts.json'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id: number = 0;
  posts: Post[] = [];
  post?: Post;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let idParam = this.route.snapshot.paramMap.get('id')
    this.id = parseInt(idParam || "");

    this.posts = data.posts;
    if (this.posts) {
      this.post = this.posts.find(post => post.id === this.id);
    }

  }

}
