import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppURL } from './app.url';
import { IndexComponent } from './components/content/index/index.component';
import { LoginComponent } from './components/content/login/login.component';
import { AmphurComponent } from './components/content/amphur/amphur.component';
import { KpiListComponent } from './components/content/kpi-list/kpi-list.component';
import { ClientComponent } from './components/content/client/client.component';
import { QofComponent } from './components/content/qof/qof.component';
import { QofdistComponent } from './components/content/qofdist/qofdist.component';
import { QclientComponent } from './components/content/qclient/qclient.component';
import { QofinfoComponent } from './components/content/qofinfo/qofinfo.component';
import { SearchqofComponent } from './components/content/searchqof/searchqof.component';


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
  { path: AppURL.Qof, component: QofComponent },
  { path: AppURL.Qof + '/:type', component: QofComponent },
  { path: AppURL.QofDist, component: QofdistComponent },
  { path: AppURL.QofDist + '/:type' + '/:kpi_id', component: QofdistComponent },
  { path: AppURL.Qclient, component: QclientComponent },
  { path: AppURL.Qclient + '/:type' + '/:kpi_id' + '/:hmain', component: QclientComponent },
  { path: AppURL.QofInfo, component: QofinfoComponent },
  { path: AppURL.QofInfo + '/:type' + '/:kpi_id' + '/:hmain' + '/:hospcode' + '/:status', component: QofinfoComponent },
  { path: AppURL.SearchQof, component: SearchqofComponent },
  { path: '**', redirectTo: AppURL.Index, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
