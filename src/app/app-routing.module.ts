import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppURL } from './app.url';
import { IndexComponent } from './components/content/index/index.component';
import { LoginComponent } from './components/content/login/login.component';


const routes: Routes = [
  { path: AppURL.Index, component: IndexComponent },
  { path: AppURL.Login, component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
