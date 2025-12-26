import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostContainer } from './post-container/post-container';
import { PostComponent } from './post/post';
import { PostsRoutingModule } from './posts-routing.module';



@NgModule({
  declarations: [

    PostComponent,
    PostContainer
  ],
  imports: [
    PostsRoutingModule,
    CommonModule
  ]
})
export class PostsModule { }
