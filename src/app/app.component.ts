import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit() {
    
  }

  btnParent(info){
    console.log("Button clicked from parent: " + info);
  }


  observar(){

    var click$ = Observable.of("santhosh");
    
    click$.subscribe(map => console.log(map) )
     
  }

}
