import { HttpClient } from "@angular/common/http";
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

  constructor(private http: HttpClient){}

  getPosts(){
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
    .subscribe((postData)=>{
      this.posts =postData.posts;
      this.postsUpdated.next([...this.posts])
    })
  }

  getPostUpdatedListener(){
    return this.postsUpdated.asObservable()
  }

  addPost(title: string, content:string){
    const post: Post = { id:'', title:title, content:content }
    this.http.post<{message:string}>('http://localhost:3000/api/posts',post)
    .subscribe((responseData)=>{
      console.log(responseData.message)
      this.posts.push(post)
      this.postsUpdated.next([...this.posts])
    })

  }
}
