import {Component, OnInit} from '@angular/core';
import {User} from "../../../core/models/user";
import {CURRENT_USER} from "../../../utils/constant";
import {BodyComponent} from "../body/body.component";
import {SidenavComponent} from "../sidenav/sidenav.component";
import {FooterComponent} from "../footer/footer.component";
import {TopbarComponent} from "../topbar/topbar.component";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
userInfos! : User;
  title = 'sidenav';

  isSideNavCollapsed = false;
  screenWidth = 0;
  constructor() { }

  ngOnInit(): void {
    this.userInfos = JSON.parse(localStorage.getItem(CURRENT_USER) || '{}');
  }
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

}
