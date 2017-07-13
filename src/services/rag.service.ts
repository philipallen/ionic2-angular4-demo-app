import { Injectable } from '@angular/core';

@Injectable()
export class RagService {
  getRagForAdherence(adherence, background) {
    let className;
    if (adherence < 60) className = 'rag-red'
    if (adherence > 59 && adherence < 85) className = 'rag-amber'
    if (adherence > 84) className = 'rag-green'
    if (background) className = className + '-bg';
    return className;
  }

  getRagForActivity(activity, background) {
    let className;
    if (activity < 5) className = 'rag-red'
    if (activity > 4 && activity < 8) className = 'rag-amber'
    if (activity > 7) className = 'rag-green'
    if (background) className = className + '-bg';
    return className;
  }

  getRagForFeeling(feeling, background) {
    let className;
    if (feeling === 'unwell') className = 'rag-red'
    if (feeling === 'ok') className = 'rag-amber'
    if (feeling === 'well') className = 'rag-green'
    if (background) className = className + '-bg';
    return className;
  }
}