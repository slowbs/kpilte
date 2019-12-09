import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ContentsComponent } from './contents/contents.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent, 
    ControlSidebarComponent, 
    FooterComponent,
    ContentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent, 
    ControlSidebarComponent, 
    FooterComponent,
    ContentsComponent
  ]
})
export class SharedModule { }
