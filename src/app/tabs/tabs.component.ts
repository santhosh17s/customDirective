import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {

  // typescript needs to know what properties will exist on class instances
 // tabs: TabComponent[] = [];

  @ViewChild('tabComp') comp: ElementRef; 

 @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() {
    
   }

  ngOnInit() {
    this.comp.nativeElement.style.border = '1px solid gray';
  }

  ngAfterViewInit() {
    
  }

  ngAfterContentInit() {

    let activeTab = this.tabs.filter( (tab) =>  tab.active)

    if( activeTab.length === 0 ) {
      this.selectTab(this.tabs.first)
    }
  }

  selectTab(tab: TabComponent) {
    console.log("Tab:" + tab);
      this.tabs.toArray().forEach( tab => tab.active = false );

      tab.active = true;

  }

  /* selectTab(tab: TabComponent) {
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
  } */

}
