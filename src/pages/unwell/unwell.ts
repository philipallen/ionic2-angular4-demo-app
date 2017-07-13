import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SymptomsPage } from '../symptoms/symptoms';

@Component({
  selector: 'page-unwell',
  templateUrl: 'unwell.html'
})
export class UnwellPage {

  constructor(public navCtrl: NavController) {

  }

  back() {
    this.navCtrl.pop();
  }

  toSymptoms() {
    this.navCtrl.push(SymptomsPage);
  }

}
