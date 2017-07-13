import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-medicationconfirmation',
  templateUrl: 'medicationconfirmation.html'
})
export class MedicationConfirmationPage {
  timeOfMedication = new Date().toISOString();

  constructor(
    public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
