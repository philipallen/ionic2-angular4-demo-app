import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Bookmark } from '../../models/bookmark';

@Component({
  selector: 'page-bookmark',
  templateUrl: 'bookmark.html'
})
export class BookmarkPage {
  bookmark: Bookmark;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bookmark = this.navParams.get('bookmark');
  }

  back() {
    this.navCtrl.pop();
  }

  onVideoClick(ev) {
    let video = ev.target;

    video.paused ? video.play() : video.pause();
  }

}
