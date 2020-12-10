import { Component, Input, OnInit } from '@angular/core';
import {BlogPost} from '../BlogPost'
import {PostService} from '../post.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  post:BlogPost;
  querySub:any;
  commentName: string;
  commentText: string;
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  submitComment(){
    this.post.comments.push({
      author: this.commentName,
      comment: this.commentText,
      date: new Date().toLocaleDateString()
    });
    this.postService.updatePostById(this.post._id, this.post).subscribe(() =>{
      this.commentName = "";
      this.commentText = "";
    })

  }
  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params =>{
      //TODO: Get post by Id params['id'] and store the result in this.post
      this.postService.getPostbyId(params['id']).subscribe(data => {
        this.post = data;
        this.post.views = this.post.views + 1;
        this.postService.updatePostById(this.post._id, this.post).subscribe();

      });
      })
  }
  ngOnDestroy(): void{
    if(this.querySub) this.querySub.unsubscribe();
  }
}
