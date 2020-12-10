import { Component, OnInit, Input } from '@angular/core';
import {BlogPost} from '../BlogPost';
import { PostService} from '../post.service'

@Component({
  selector: 'app-latest-posts-footer',
  templateUrl: './latest-posts-footer.component.html',
  styleUrls: ['./latest-posts-footer.component.css']
})
export class LatestPostsFooterComponent implements OnInit {
  posts: Array<BlogPost>;
  constructor(private postService: PostService) { }
 
  ngOnInit(): void {

    this.postService.getPosts(1, null, null).subscribe(data => this.posts = data.slice(0,3))
  }

}
