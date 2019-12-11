import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppURL } from './app.url';
import { IndexComponent } from './components/content/index/index.component';
import { LoginComponent } from './components/content/login/login.component';
import { AmphurComponent } from './components/content/amphur/amphur.component';


const routes: Routes = [
  { path: '', redirectTo: AppURL.Index, pathMatch: 'full' },
  { path: AppURL.Index, component: IndexComponent },
  { path: AppURL.Login, component: LoginComponent },
  { path: AppURL.Amphur, component: AmphurComponent },
  { path: AppURL.Amphur + '/:type' + '/:status', component: AmphurComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
