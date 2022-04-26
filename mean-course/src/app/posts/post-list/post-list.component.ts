import { Component, Input, OnInit } from "@angular/core";
import { Post } from "../post.model";
import { PostService } from "../posts.service";

@Component({
selector: 'app-post-list',
templateUrl:'./post-list.component.html',
styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit{
// posts = [
//   {title:'First Post', content: 'This is the fist post content!!'},
//   {title:'Second Post', content: 'This is the second post content!!'},
//   {title:'Third Post', content: 'This is the third post content!!'}
// ]

 posts: Post[] = []

constructor(public postsService: PostService){}

ngOnInit(){
  this.posts = this.postsService.getPosts()
}
}
