import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TreatmentTimelinePage } from '../treatmenttimeline/treatmenttimeline';
import { MyBookmarksPage } from '../mybookmarks/mybookmarks';

@Component({
  selector: 'page-myresources',
  templateUrl: 'myresources.html'
})
export class MyResourcesPage {
  RESOURCES = [];

  constructor(public navCtrl: NavController) {
    this.RESOURCES = [
      { title: 'My treatment timeline', page: TreatmentTimelinePage },
      { title: 'Videos and articles', page: MyBookmarksPage },
      { title: 'About Tasigna™', page: '' },
      { title: 'FAQs about Ph+ CML care', page: '' },
      { title: 'Treatment support groups', page: '' }
    ];
  }

  toPage(page) {
    if (!page) return;
    this.navCtrl.push(page);
  }
}


