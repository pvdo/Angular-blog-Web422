import { Component, Input, OnInit } from '@angular/core';
import {BlogPost} from '../BlogPost'
@Component({
  selector: 'app-post-home-card',
  templateUrl: './post-home-card.component.html',
  styleUrls: ['./post-home-card.component.css']
})
export class PostHomeCardComponent implements OnInit {
  @Input() posts:Array<BlogPost>;
  isEven: boolean = true;
  changeEven(){
    this.isEven = !this.isEven;
  }
  constructor() { }


  ngOnInit(): void {
  }
 
}
