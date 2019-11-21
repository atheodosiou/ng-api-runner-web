import { Component } from '@angular/core';
import { SideBarActions } from './shared/static-data/sidebar-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apiRunner';
  toggled=true;
  sidebarActions=SideBarActions;
  
  onSidebarToggle(){
    this.toggled=!this.toggled;
  }

}
