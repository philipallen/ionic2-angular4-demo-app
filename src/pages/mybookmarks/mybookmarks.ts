import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BookmarksService } from '../../services/bookmarks.service';
import { BookmarkPage } from '../bookmark/bookmark';

@Component({
  selector: 'page-mybookmarks',
  templateUrl: 'mybookmarks.html',
  providers: [BookmarksService]
})
export class MyBookmarksPage {
  bookmarks: any[];
  loadedBookmarks: any[];

  constructor(public navCtrl: NavController,
    private bookmarksService: BookmarksService) {
    
  }

  getBookmarks(): void {
    this.bookmarksService.getBookmarks().then(bookmarks => {
      this.bookmarks = bookmarks; 
      this.loadedBookmarks = bookmarks;
    })
  }

  ngOnInit(): void {
    this.getBookmarks();
  }

  back() {
    this.navCtrl.pop();
  }

  goToBookmark(bookmark) {
    this.navCtrl.push(BookmarkPage, {bookmark: bookmark})
  }

  filterBookmarks(ev: any) {
    this.bookmarks = this.loadedBookmarks;
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.bookmarks = this.bookmarks.filter((bookmark) => {
        return (bookmark.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
