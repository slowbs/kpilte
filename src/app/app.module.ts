import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/content/index/index.component';
import { SharedModule } from './components/shared/shared.module';
import { LoginComponent } from './components/content/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AmphurComponent } from './components/content/amphur/amphur.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    AmphurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
