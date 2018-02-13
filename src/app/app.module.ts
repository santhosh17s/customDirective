import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppButtonComponent } from './component/app-button/app-button.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

import { PostsComponent } from './posts/posts.component';
import { BloggerComponent } from './blogger/blogger.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { TabNameDirective } from './tab-name.directive';


@NgModule({
  declarations: [
    AppComponent,
    AppButtonComponent,
    PostsComponent,
    BloggerComponent,
    TabsComponent,
    TabComponent,
    TabNameDirective
  ],
  imports: [
    BrowserModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
