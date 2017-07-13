import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { UnwellPage } from '../unwell/unwell';
import { MedicationDetailsPage } from '../medicationdetails/medicationdetails';
import { MedicationConfirmationPage } from '../medicationconfirmation/medicationconfirmation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dateNow = new Date();
  medicationTaken = false;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  presentMedicationDetails() {
    let modal = this.modalCtrl.create(MedicationDetailsPage);
    modal.present();
  }

  toUnwell() {
    this.navCtrl.push(UnwellPage);
  }

  notifyMedicationTaken() {
    if (!this.medicationTaken) return;
    this.presentMedicationConfirmation();
  }

  presentMedicationConfirmation() {
    let modal = this.modalCtrl.create(MedicationConfirmationPage, {}, {
      cssClass: 'condensed-modal small-sized',
      enableBackdropDismiss: false
    });
    modal.present();
  }
}
