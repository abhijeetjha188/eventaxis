import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostContainer } from './post-container/post-container';

export const routes: Routes = [
    {
        path: '',
        component: PostContainer
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule { }
