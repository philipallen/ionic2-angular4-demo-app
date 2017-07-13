import { Component, ViewChild } from '@angular/core';
import { Tabs, MenuController } from 'ionic-angular';

import { MyResourcesPage } from '../myresources/myresources';
import { LetsTalkPage } from '../letstalk/letstalk';
import { HomePage } from '../home/home';
import { AppointmentsPage } from '../appointments/appointments';

@Component({
  templateUrl: 'tabs.html',
  providers: [Tabs]
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  tabColour = 'secondary';
  tab1Root = HomePage;
  tab2Root = MyResourcesPage;
  tab3Root = LetsTalkPage;
  tab4Root = AppointmentsPage;

  constructor(public menuCtrl: MenuController) {

  }

  changeTab() {
    let selectedTabTitle = this.tabRef.getSelected().tabTitle;
    switch(selectedTabTitle) {
      case 'My Resources': this.tabColour = 'lightalternative'; break;
      case 'Appointments': this.tabColour = 'lightstandard'; break;
      default: this.tabColour = 'secondary';
    }
  }

  openMenu() {
    this.menuCtrl.open();
  }
}
