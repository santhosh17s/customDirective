import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { TAMIL, HINDI, ENGLISH } from './messageReducer';

export interface AppState {
  message: string;
}

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  message$: Observable<string>;
  title$: Observable<string>;
  voteCount$: Observable<number>;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {

      this.message$ = this.store.pipe(select('message'));

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

  }

  downvote(){}

  votereset(){

  }

}
