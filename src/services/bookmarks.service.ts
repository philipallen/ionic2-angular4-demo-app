import { Injectable } from '@angular/core';

import { Bookmark } from '../models/bookmark';
import { BOOKMARKS } from '../mock/mock-bookmarks';

@Injectable()
export class BookmarksService {
  getBookmarks(): Promise<Bookmark[]> {
    return Promise.resolve(BOOKMARKS);
  }
}