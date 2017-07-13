import { Injectable } from '@angular/core';

import { SymptomPosition } from '../models/symptomposition';
import { SYMPTOMS } from '../mock/mock-symptoms';

@Injectable()
export class SymptomsService {
  getSymptoms(): Promise<SymptomPosition[]> {
    return Promise.resolve(SYMPTOMS);
  }
}