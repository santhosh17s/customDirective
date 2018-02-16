import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { TAMIL, HINDI, ENGLISH } from './messageReducer';

import { Post } from '../models/post.model';
import * as PostAction from '../action/post.action';

//STRING MESSAGE DISPLAY
/* export interface AppState {
  message: string;
} */

//POST INTERFACE
interface AppState {
  post: Post;
}

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  message$: Observable<string>;

  post$ : Observable<Post>;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {

      //this.message$ = this.store.pipe(select('message'));
     
      this.post$ = this.store.pipe(select('post'));

  }

  tamilLang(){
      this.store.dispatch({type:TAMIL})
  }
  hindiLang() {
    this.store.dispatch({type: HINDI });
  }

  englishLang(){
    this.store.dispatch({type: ENGLISH });
  }

  upvote(){
    this.store.dispatch(new PostAction.Upvote() );
  }

  downvote(){
    this.store.dispatch(new PostAction.Downvote());
  }

  votereset(){
      this.store.dispatch(new PostAction.Reset());
  }

}
