import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppButtonComponent } from './component/app-button/app-button.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

import { PostsComponent } from './posts/posts.component';
import { BloggerComponent } from './blogger/blogger.component';


@NgModule({
  declarations: [
    AppComponent,
    AppButtonComponent,
    PostsComponent,
    BloggerComponent
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
