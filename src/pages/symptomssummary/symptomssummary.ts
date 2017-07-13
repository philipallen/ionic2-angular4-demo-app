import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-symptomssummary',
  templateUrl: 'symptomssummary.html'
})
export class SymptomsSummaryPage {
  symptomPositions: any[];

  constructor(
    public navCtrl: NavController, 
    public viewCtrl: ViewController,
    public navParams: NavParams) {
      this.symptomPositions = this.navParams.get('symptomPositions');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submitSymptoms() {
    //TODO prepare data to send to backend here
  }
}
