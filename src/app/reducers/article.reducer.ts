import { Action, createFeatureSelector, createSelector } from "@ngrx/store";
import { ArticleState } from "../app.states";
import * as fromActions from '../action/article.action';

export const initialState: ArticleState = { articles: [], message : '' };

export function ArticleReducer(state = initialState, action: fromActions.ALL_REDUCER_ACTIONS): ArticleState {
    switch(action.type) {
        case fromActions.SHOW_ALL_SUCCESS : {
            return { articles: action.payload, message:'Success' };
        }

        default:
            return state;

    }
}

export const getArticleState = createFeatureSelector<ArticleState>('articleState');

export const getArticles = createSelector(
    getArticleState, 
    (state: ArticleState) => state.articles 
);

export const getMessage = createSelector(
  getArticleState, 
  (state: ArticleState) => state.message
); 