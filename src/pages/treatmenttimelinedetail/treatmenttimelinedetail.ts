import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RagService } from '../../services/rag.service';

@Component({
  selector: 'page-treatmenttimeline-detail',
  templateUrl: 'treatmenttimelinedetail.html',
  providers: [RagService]
})
export class TreatmentTimelineDetailPage {

  treatment: any[];

  constructor(
    public navCtrl: NavController, public navParams: NavParams, private ragService: RagService) {
      this.treatment = this.navParams.get('treatmentData');
  }

}
