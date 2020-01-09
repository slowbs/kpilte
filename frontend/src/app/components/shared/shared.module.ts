import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ContentsComponent } from './contents/contents.component';
import { HeaderfullComponent } from './headerfull/headerfull.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent, 
    ControlSidebarComponent, 
    FooterComponent,
    ContentsComponent,
    HeaderfullComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent, 
    ControlSidebarComponent, 
    FooterComponent,
    ContentsComponent,
    HeaderfullComponent
  ]
})
export class SharedModule { }
