import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';

import { SymptomsService } from '../../services/symptoms.service';

import { SymptomsSummaryPage } from '../symptomssummary/symptomssummary';


@Component({
  selector: 'page-symptoms',
  templateUrl: 'symptoms.html',
  providers: [SymptomsService]
})
export class SymptomsPage {
  symptomPositions: any[];
  selectedSymptomPosition: Object;
  flip: string = 'front';

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    private symptomsService: SymptomsService,
    public modalCtrl: ModalController) {

  }

  getSymptoms(): void {
    this.symptomsService.getSymptoms().then(symptomPositions => this.symptomPositions = symptomPositions);
  }

  ngOnInit(): void {
    this.getSymptoms();
  }

  back() {
    this.navCtrl.pop();
  }

  showCheckbox(symptomPosition) {
    this.selectedSymptomPosition = symptomPosition;
    let alert = this.alertCtrl.create({
      title: symptomPosition.position,
      buttons: [
        {
          text: 'Record symptoms',
          handler: function (data) {
            //TODO this isn't great. It's manually persisting the checked items and saving to the model.
            //...lack of documentation and time meant this was the way I had to do it.
            this.selectedSymptomPosition.completed = false;
            for (let j = 0; j < this.selectedSymptomPosition.options.length; j++) {
              this.selectedSymptomPosition.options[j].checked = false;
              for (let i = 0; i < data.length; i++) {
                if (this.selectedSymptomPosition.options[j].value === data[i]) {
                  this.selectedSymptomPosition.completed = true;
                  this.selectedSymptomPosition.options[j].checked = true;
                }
              }
            }
            this.selectedSymptomPosition = null;
          }.bind(this)
        },
        {
          text: '\u2716',
          role: 'cancel',
          cssClass: 'alert-x-button',
          handler: function (data) {}
        }
      ]
    });

    for (var i = 0; i < symptomPosition.options.length; i++) {
      alert.addInput(symptomPosition.options[i]);
    }
    
    alert.present();
  }

  checkSymptomsComplete() {
    if (!this.symptomPositions) return;
    for (let i = 0; i < this.symptomPositions.length; i++) {
      if (this.symptomPositions[i].completed) {
        return true;
      }
    }
  }

  toggleFlip() {
    this.flip = (this.flip === 'rear') ? 'front' : 'rear';
  }

  toSymptomSummaryPage() {
    let modal = this.modalCtrl.create(SymptomsSummaryPage, {symptomPositions: this.symptomPositions});
    modal.present();
  }

}
