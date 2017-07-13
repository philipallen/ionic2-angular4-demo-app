import { Component } from '@angular/core';
import { NavController, ViewController  } from 'ionic-angular';

@Component({
  selector: 'page-medicationdetails',
  templateUrl: 'medicationdetails.html'
})
export class MedicationDetailsPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
