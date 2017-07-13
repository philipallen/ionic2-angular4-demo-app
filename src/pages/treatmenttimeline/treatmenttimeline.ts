import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { TreatmentsService } from '../../services/treatments.service';
import { RagService } from '../../services/rag.service';

import { TreatmentTimelineDetailPage } from '../treatmenttimelinedetail/treatmenttimelinedetail';

@Component({
  selector: 'page-treatmenttimeline',
  templateUrl: 'treatmenttimeline.html',
  providers: [TreatmentsService, RagService]
})
export class TreatmentTimelinePage {

  treatments: any[];

  constructor(
    public navCtrl: NavController, 
    private treatmentsService: TreatmentsService,
    private ragService: RagService,
    public modalCtrl: ModalController) {

  }

  back() {
    this.navCtrl.pop();
  }

  getTreatments(): void {
    this.treatmentsService.getTreatments().then(treatments => this.treatments = treatments);
  }

  ngOnInit(): void {
    this.getTreatments();
  }

  presentTreatmentDetail(treatment) {
    let modal = this.modalCtrl.create(TreatmentTimelineDetailPage, {
      treatmentData: treatment 
    }, {
      cssClass: 'condensed-modal medium-sized',
      enableBackdropDismiss: true
    });
    modal.present();
  }

}
