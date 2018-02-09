import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export type buttonType = 'primary' | 'secondary';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.css']
})
export class AppButtonComponent implements OnInit {

  @Input() type: buttonType = "primary";
  @Output() info = new EventEmitter();

  // GET & SET TYPESCRIPT
  private _class:string = null;

  constructor() { }

  ngOnInit() {
  }


  //GET PROPERTY
  get className(){
    return this._class;
  }
  //SET PROPERTY
  set className(name){
    this._class = `Santhosh- ${name}`;
  }

  btnClick() {
    //console.log("Button clicked from client");
    //this.info.emit("Hi from child");
    this.className = "Btn clicked";
    console.log(this.className);
  }

}
