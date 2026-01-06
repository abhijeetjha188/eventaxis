import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private postListSubject = new BehaviorSubject<Post[]>([]);
  postList$ = this.postListSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchPost() {
    return this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map(posts => posts.slice(0, 10)),
        tap(posts => this.postListSubject.next(posts))
      );
  }

  deletePost(id: number) {
    const updatedList = this.postListSubject
      .getValue()
      .filter(post => post.id !== id);

    this.postListSubject.next(updatedList);
  }
}
