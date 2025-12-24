import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post-service';

@Component({
  selector: 'app-post-container',
  standalone: false,
  templateUrl: './post-container.html',
  styleUrl: './post-container.scss',
})
export class PostContainer implements OnInit {

  postList$!: Observable<Post[]>

  constructor(private ps: PostService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getPosts()
  }
  getPosts() {
    this.postList$ = this.ps.fetchPost()
  }
  deletePost(index: number): void {
    // this.postList.splice(index, 1);
  }

}