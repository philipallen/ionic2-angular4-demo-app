import { Component } from '@angular/core';
import { Push, PushToken } from '@ionic/cloud-angular';

import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  MENUITEMS = [];
  MENUACTIONS = [];
  MYPEOPLE = [];
  TOKEN;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    public menuCtrl: MenuController, 
    public push: Push
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.MYPEOPLE = [
      { name: 'Nurse Karen Cooke', role: 'My patient services liaison (psl or carer)', src: 'my-officer.jpg' },
      { name: 'Prof. Anna Schmidt', role: 'My doctor', src: 'my-doctor.jpg' }
    ]

    this.MENUACTIONS = [
      { title: 'Log out', icon: 'icon-person' },
      { title: 'My settings', icon: 'icon-settings' }
    ];

    this.MENUITEMS = [
      { title: 'Help' },
      { title: 'Privacy statement' },
      { title: 'Terms and conditions' }
    ];

    if (platform.is('android') || platform.is('ios')) {
      this.push.register().then((t: PushToken) => {
        return this.push.saveToken(t);
      }).then((t: PushToken) => {
        this.TOKEN = t.token;
        alert('Token saved:' + t.token);
      });

      this.push.rx.notification()
        .subscribe((msg) => {
          alert(msg.title + ': ' + msg.text);
        });
    }
    
  }

  closeMenu() {
    this.menuCtrl.close();
  }
}
