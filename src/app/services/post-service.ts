import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  constructor(private http: HttpClient) {

  }
  fetchPost() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
  deletePost() {

  }

}
