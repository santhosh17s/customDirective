import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppButtonComponent } from './component/app-button/app-button.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path:'button', component: AppButtonComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
