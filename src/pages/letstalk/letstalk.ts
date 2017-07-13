import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MarketingCloudService } from '../../services/marketingcloud.service';

@Component({
  selector: 'page-letstalk',
  templateUrl: 'letstalk.html',
  providers: [MarketingCloudService]
})
export class LetsTalkPage {
  accessToken: any;
  errorMessage: any;

  constructor(public navCtrl: NavController,
    private marketingCloudService: MarketingCloudService) {

  }

  getMCAccessToken() {
    //TODO it's terrible practice to store the clientSecret in the front end.
    let data = {
      "clientId": "x7a07gg9qdt6dwjvoe1523ec",
      "clientSecret": "4zbF6xSvVvxTJOaaRV10d1g8"
    }

    this.marketingCloudService.getAccessToken(data)
                    .subscribe(
                      hero  => this.accessToken = hero,
                      error =>  this.errorMessage = <any>error);
  }

}
