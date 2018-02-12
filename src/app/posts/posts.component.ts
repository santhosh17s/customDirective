import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Post, GroupPosts } from '../post.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnChanges {
  //ngOnInit
  //@Input('data') post: Post[];

  groupPosts: GroupPosts[];

  private _data = new BehaviorSubject<Post[]>([])

  @Input('data') 
  set post(value) {
    this._data.next(value); 
  }

  get post() { 
    // get the latest value from _data BehaviorSubject
    return this._data.getValue();
  }

  constructor() { }

  ngOnInit() {

    //will bind the post component only if the posts variable has a value
   // this.groupPosts = this.groupByCategory(this.post);


    // now we can subscribe to it, whenever input changes, 
    // we will run our grouping logic
    this._data
          // listen to data as long as groupPosts is undefined or null
          // Unsubscribe once groupPosts has value
          .takeWhile(() => !this.groupPosts)
          .subscribe( x => this.groupPosts = this.groupByCategory(this.post) )
    
  }

  ngOnChanges(changes: SimpleChanges){

    // whenever it detects changes to input properties
   // if(changes['post']){
    //  this.groupPosts = this.groupByCategory(this.post);
   // }

  }

  groupByCategory(data: Post[]): GroupPosts[] {
    // our logic to group the posts by category
    if (!data) return;

    // find out all the unique categories
    const categories = new Set(data.map(x => x.category));

    // produce a list of category with its posts
    const result = Array.from(categories).map(x => ({
        category: x,
        posts: data.filter(post => post.category === x)
    }));



    return result;
}

}
