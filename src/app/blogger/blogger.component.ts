import { Component, OnInit } from '@angular/core';
import { Post } from '../post.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Http } from '@angular/http';


@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css']
})
export class BloggerComponent implements OnInit {

  bloggers: string = "Blogger List";
  posts: Post[];
  

  constructor(private http: Http) { }

  ngOnInit() {

    this.getPostByBlogger()
    .subscribe( x => {
                     this.posts = x;
                    });
   

  }

  getPostByBlogger() {
    const url: string = 'assets/mock-post.json';

    return this.http.get(url)
    .map(x => x.json() );
    
          
    
  }

}
