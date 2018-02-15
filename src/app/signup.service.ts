import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class SignupService {

  constructor(private http:Http) { }

  checkUsernameNotTaken(username: string):any{
      return this.http.get('assets/users.json')
      .delay(1000)
      .map(res => res.json())
      .do(res => console.log("service result",res))
      .map( users => users.filter(user => user.name === username ))
      .map( users => !users.length ) 
  }

}
