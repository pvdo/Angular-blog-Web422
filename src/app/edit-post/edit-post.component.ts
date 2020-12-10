import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { BlogPost} from '../BlogPost';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  blogPost: BlogPost;
  tags: String;
  post: any;
  constructor(private postService:PostService, private router:Router, private route:ActivatedRoute) { }

  formSubmit(){
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());

    this.postService.updatePostById(this.blogPost._id, this.blogPost)
    .subscribe(() => this.router.navigate(["admin"]));
  }
  deletePost(){
    this.postService.deletePostById(this.blogPost._id)
    .subscribe(() => this.router.navigate(["admin"]));

  }

  ngOnInit(): void {

      this.post = this.postService.getPostbyId(this.route.snapshot.params['id'])
      .subscribe(data => {
        this.blogPost = data;
        console.log(this.blogPost);
        this.tags = data.tags.toString();
      });
  }
  ngOnDestroy() {
    if (this.post) this.post.unsubscribe();
  }

}
