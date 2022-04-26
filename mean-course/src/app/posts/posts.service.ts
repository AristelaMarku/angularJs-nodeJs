import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostService{
  unsubcribe() {
    throw new Error("Method not implemented.");
  }
  private posts: Post[]=[];
  private postsUpdated = new Subject<Post[]>()

  getPosts(){
    return [...this.posts]
  }

  getPostUpdatedListener(){
    return this.postsUpdated.asObservable()
  }

  addPost(title: string, content:string){
    const post: Post = { title:title, content:content }
    this.posts.push(post)
    this.postsUpdated.next([...this.posts])
  }
}
