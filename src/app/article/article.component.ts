import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Article } from '../models/article';
import { Store } from '@ngrx/store';
import { ArticleState } from '../app.states';

import * as fromReducers from '../reducers/article.reducer';
import * as fromActions from '../action/article.action';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles$: Observable<Article[]>
  task:string = '';

  constructor( private store: Store<ArticleState>) {
    this.articles$ = store.select(fromReducers.getArticles);
   }

  ngOnInit() {

  }

  loadAllArticles(){
      this.task = 'All';
      
  }

  createArticleView(){

  }

  getArticleByIdView(){}

}
