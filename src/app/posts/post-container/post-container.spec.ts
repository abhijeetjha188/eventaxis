import { BehaviorSubject, of } from 'rxjs';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post-service';
import { PostContainer } from './post-container';

describe('PostContainer', () => {
  let component: PostContainer;
  let mockPostService: jasmine.SpyObj<PostService>;
  let posts: Post[];
  let postListSubject: BehaviorSubject<Post[]>;

  beforeEach(() => {
    posts = [
      { id: 1, title: 'post 1', body: 'body 1' },
      { id: 2, title: 'post 2', body: 'body 2' },
      { id: 3, title: 'post 3', body: 'body 3' },
    ];
    mockPostService = jasmine.createSpyObj(['deletePost', 'fetchPost']);
    component = new PostContainer(mockPostService)
  })



  // describe('Delete', () => {
  //   it('should delete posts on delete method', () => {
  //     //arrange
  //     // mockPostService.deletePost.and.returnValue()
  //     component.postList = posts;

  //     //act
  //     component.deletePost(posts[1]);

  //     //assert
  //     expect(mockPostService.deletePost).toHaveBeenCalledWith(posts[1].id)
  //   })

  //   it('should call delete only once upon delete', () => {
  //     component.postList = posts;

  //     component.deletePost(posts[1]);

  //     expect(mockPostService.deletePost).toHaveBeenCalledTimes(1)
  //   })

    
  // })


});
