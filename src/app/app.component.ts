import { Component } from '@angular/core';
declare const openSidebar:any;
declare const closeSidebar:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyDataMigration';
  OpenSideBar(){
    openSidebar();
  }
  CloseSideBar(){
    closeSidebar();
  }

}
