import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/content/index/index.component';
import { SharedModule } from './components/shared/shared.module';
import { LoginComponent } from './components/content/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AmphurComponent } from './components/content/amphur/amphur.component';
import { DataTablesModule } from 'angular-datatables';
import { KpiListComponent } from './components/content/kpi-list/kpi-list.component';
import { ClientComponent } from './components/content/client/client.component';
import { QofComponent } from './components/content/qof/qof.component';
import { QofdistComponent } from './components/content/qofdist/qofdist.component';
import { QclientComponent } from './components/content/qclient/qclient.component';
import { QofinfoComponent } from './components/content/qofinfo/qofinfo.component';
import { SearchqofComponent } from './components/content/searchqof/searchqof.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    AmphurComponent,
    KpiListComponent,
    ClientComponent,
    QofComponent,
    QofdistComponent,
    QclientComponent,
    QofinfoComponent,
    SearchqofComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
