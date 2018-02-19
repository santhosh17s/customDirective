import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Article } from "../models/article";

@Injectable()
export class ArticleService {

    
    constructor(private http: HttpClient){}

    url = 'api/articles';

    getAllArticle(): Observable<Article[]>{
        return this.http.get<Article[]>(this.url);
    }


}