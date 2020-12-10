import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import {PostService} from '../post.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homePosts: Array<BlogPost>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(data => {
      this.homePosts = data
      this.homePosts.sort(function compare(a,b){
        return b.views.valueOf() - a.views.valueOf() ;
      })
    });
  }

}
