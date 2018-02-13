import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() tabTitle;

  active: boolean = false;

  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
   }

  ngOnInit() {
  }



}
