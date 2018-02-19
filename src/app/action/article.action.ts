import { Action } from "@ngrx/store";
import { Article } from "../models/article";

export const SHOW_ALL = '[Article] Show All';
export const SHOW_ALL_SUCCESS = '[Article] Show All Success';

export class ShowAllAction implements Action {
    readonly type = SHOW_ALL;
}

export class showAllSuccessAction implements Action {
    readonly type = SHOW_ALL_SUCCESS;
    constructor(public payload: Article[]){}
}

export type ALL_REDUCER_ACTIONS = ShowAllAction | showAllSuccessAction;