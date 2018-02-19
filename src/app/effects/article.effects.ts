import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";

import * as fromAction from '../action/article.action';
import { ArticleService } from "../service/article.service";

@Injectable()
export class ArticleEffects {


    constructor(private actions$:Actions, private articleService$: ArticleService){}

    @Effect()
    loadAllArticle$:Observable<Action> = this.actions$.ofType(fromAction.SHOW_ALL)
    .switchMap( () => 
        this.articleService$.getAllArticle()
        .map( data => new fromAction.showAllSuccessAction(data))
    );

}