import { Component, OnInit, Input } from '@angular/core';
import {BlogPost} from '../BlogPost';
import { PostService} from '../post.service'

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
  posts: BlogPost[];
  constructor(private postService: PostService) { }
 
  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
      this.posts.sort(function compare(a,b){
        var dateA = new Date(a.postDate);
        var dateB = new Date(b.postDate);
  
        return dateB.valueOf() - dateA.valueOf() ;
      })
      this.posts = this.posts.slice(0,3);
    });
  }

}
