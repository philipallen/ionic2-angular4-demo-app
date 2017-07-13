import { Injectable } from '@angular/core';

import { Treatment } from '../models/treatment';
import { TREATMENTS } from '../mock/mock-treatments';

@Injectable()
export class TreatmentsService {
  getTreatments(): Promise<Treatment[]> {
    return Promise.resolve(TREATMENTS);
  }
}