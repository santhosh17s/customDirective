import { Article } from "./models/article";

export interface ArticleState {
    articles: Article[];
    message : any;
}