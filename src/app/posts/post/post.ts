import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post-service';


@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.html',
  styleUrls: ['./post.scss'],
  // changeDetection: ChangeDetectionStrategy.Default
})
export class PostComponent {
  @Input() post!: Post
  @Input() index!: number;

  constructor(private ps: PostService) { }

  deletePost(post: Post): void {
    this.ps.deletePost(post.id)
  }
}
