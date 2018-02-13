import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  // typescript needs to know what properties will exist on class instances
  tabs: TabComponent[] = [];

  constructor() { }

  ngOnInit() {
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
  }

  addTab(tab: TabComponent){
    console.log("length:"+ this.tabs.length);
    if(this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

}
