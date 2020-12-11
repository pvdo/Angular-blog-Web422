import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service'
import { Router} from '@angular/router';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.css']
})
export class SearchWidgetComponent implements OnInit {
  blogPosts: Array<BlogPost> = [];
  searchText = '';
  constructor(private postService:PostService, private router:Router) { }

  searchClicked(post){
        this.router.navigate(['/post', post._id]);
    
  }
 
  ngOnInit(): void {

    this.postService.getAllPosts().subscribe(data => {
      this.blogPosts = data;
    }
  );

  }

}
