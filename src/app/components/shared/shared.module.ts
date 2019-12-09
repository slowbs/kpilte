import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [SidebarComponent, ControlSidebarComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
