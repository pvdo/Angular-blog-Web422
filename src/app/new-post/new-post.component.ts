import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { BlogPost} from '../BlogPost';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  blogPost: BlogPost = new BlogPost();
  tags: String;
  querySub:any;
  constructor(private postService:PostService, private route:ActivatedRoute, private router:Router) { }

  formSubmit(){
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());
    this.blogPost.isPrivate = false;
    this.blogPost.postDate = new Date().toLocaleDateString();
    this.blogPost.postedBy = "WEB422 Student";
    this.blogPost.views = 0;

    this.postService.newPost(this.blogPost)
    .subscribe(() => this.router.navigate(["admin"]));
  }

  ngOnInit(): void {
  }

}

