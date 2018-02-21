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
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TabCompComponent } from './tab-comp/tab-comp.component';
import { ChartComponent } from './chart/chart.component';

import { MyMaterialModule } from './my-material.module';
// To use Animations  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  


//NGRX STORE MODULE
import { StoreModule } from '@ngrx/store';
import { messageReducer } from './store/messageReducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//NGRX/EFFECTS
import { EffectsModule } from '@ngrx/effects';
import { MainEffects } from './effects/Main.effects';

//To fetch JSON data to test application
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// For FusionChart   
import * as FusionCharts from 'fusioncharts';  
import * as Charts from 'fusioncharts/fusioncharts.charts';  
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';  
import { FusionChartsModule } from 'angular4-fusioncharts';
import { CountryComponent } from './country/country/country.component';  
import { CountryService } from './country/country.service';
import { CountryDetailComponent } from './country/country-detail/country-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupService } from './signup.service';
import { StoreComponent } from './store/store.component';
import { PostReducer } from './reducers/post.reducer';
import { ArticleComponent } from './article/article.component';
import { ArticleReducer } from './reducers/article.reducer';
import { ArticleEffects } from './effects/article.effects';
import { TestData } from './models/test-data';
import { MyComponentComponent } from './component/my-component/my-component.component';



@NgModule({
  declarations: [
    AppComponent,
    AppButtonComponent,
    PostsComponent,
    BloggerComponent,
    TabsComponent,
    TabComponent,
    TabNameDirective,
    HomeComponent,
    TabCompComponent,
    ChartComponent,
    CountryComponent,
    CountryDetailComponent,
    StoreComponent,
    ArticleComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme),
    MyMaterialModule,
    StoreModule.forRoot({
      message: messageReducer,
      post: PostReducer
      }),
   // StoreModule.forRoot(ArticleReducer),  
    //EffectsModule.forRoot([MainEffects, ArticleEffects]),  
    StoreDevtoolsModule.instrument({
      maxAge: 10,
      logOnly: environment.production
    })
   // InMemoryWebApiModule.forRoot(TestData)

  ],
  providers: [ CountryService, SignupService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
