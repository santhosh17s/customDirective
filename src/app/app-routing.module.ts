import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppButtonComponent } from './component/app-button/app-button.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { BloggerComponent } from './blogger/blogger.component';
import { TabCompComponent } from './tab-comp/tab-comp.component';
import { ChartComponent } from './chart/chart.component';
import { CountryComponent } from './country/country/country.component';
import { CountryDetailComponent } from './country/country-detail/country-detail.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'button', component: AppButtonComponent, canActivate:[AuthGuard] },
  { path:'blogger', component: BloggerComponent },
  { path:'tab', component: TabCompComponent },
  { path:'chart', component: ChartComponent },
  { path:'country', component: CountryComponent },
  { path:'detail/:name', component: CountryDetailComponent },
  { path:'store', component: StoreComponent },
  { path:'', redirectTo:'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
