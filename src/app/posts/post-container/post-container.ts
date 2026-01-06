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

  postList!: Post[]

  constructor(private ps: PostService) {

  }

  ngOnInit(): void {
    this.getPosts();
    this.postList$.subscribe((data) => this.postList = data)
  }
  getPosts() {
    this.postList$ = this.ps.postList$;
    this.ps.fetchPost().subscribe();
  }
 

}