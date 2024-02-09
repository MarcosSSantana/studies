import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {
  @Input() id: string = "";
  @Input() titulo: string = "";
  @Input() subTitulo: string = "";
  @Input() autor: string = "";
  @Input() data: string = "";
}
