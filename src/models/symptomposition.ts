import { Symptom } from '../models/symptom';

export class SymptomPosition {
  position: string;
  side: string;
  id: number;
  top: number;
  left: number;
  completed: boolean;
  options: Symptom[];
}