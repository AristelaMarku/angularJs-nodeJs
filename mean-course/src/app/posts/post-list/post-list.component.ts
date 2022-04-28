import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../post.model";
import { PostService } from "../posts.service";

@Component({
selector: 'app-post-list',
templateUrl:'./post-list.component.html',
styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy{
// posts = [
//   {title:'First Post', content: 'This is the fist post content!!'},
//   {title:'Second Post', content: 'This is the second post content!!'},
//   {title:'Third Post', content: 'This is the third post content!!'}
// ]

posts: Post[] = [];
private postsSub!: Subscription;

constructor(public postsService: PostService) {}

ngOnInit() {
  this.postsService.getPosts();
  this.postsSub = this.postsService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
}

onDelete(postId: string) {
  this.postsService.deletePost(postId);
}

ngOnDestroy() {
  this.postsSub.unsubscribe();
}
}
