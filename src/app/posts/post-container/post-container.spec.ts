import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostContainer } from './post-container';

describe('PostContainer', () => {
  let component: PostContainer;
  let fixture: ComponentFixture<PostContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
