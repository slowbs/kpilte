import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppURL } from './app.url';
import { IndexComponent } from './components/content/index/index.component';
import { LoginComponent } from './components/content/login/login.component';
import { AmphurComponent } from './components/content/amphur/amphur.component';
import { KpiListComponent } from './components/content/kpi-list/kpi-list.component';
import { ClientComponent } from './components/content/client/client.component';


const routes: Routes = [
  { path: '', redirectTo: AppURL.Index, pathMatch: 'full' },
  { path: AppURL.Index, component: IndexComponent },
  { path: AppURL.Login, component: LoginComponent },
  { path: AppURL.Amphur, component: AmphurComponent },
  { path: AppURL.Amphur + '/:type' + '/:status' + '/:kpi_id', component: AmphurComponent },
  { path: AppURL.Kpi, component: KpiListComponent },
  { path: AppURL.Kpi + '/:type' + '/:status', component: KpiListComponent },
  { path: AppURL.Client, component: ClientComponent },
  { path: AppURL.Client + '/:type' + '/:status' + '/:kpi_id' + '/:amphurcode', component: ClientComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
