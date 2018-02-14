import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 

  ngOnInit() {
    
  }

 


  observar(){

    var click$ = Observable.of("Hi");
    
    click$.subscribe(map => console.log(map) )
     
  }

}
