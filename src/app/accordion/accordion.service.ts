import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Accordion } from './accordion.interface';
import {
  accordions_pt_br,
  accordions_en_us,
  accordions_hi_in,
  accordions_es_co,
  accordions_zn_cn,
} from './accordion.mock';

@Injectable({
  providedIn: 'root',
})
export class AccordionService {
  constructor() {}

  getAccordionData(language: string): Observable<Accordion[]> {
    switch (language) {
      case 'pt-BR':
        return of(accordions_pt_br);
      case 'en-US':
        return of(accordions_en_us);
      case 'es-CO':
        return of(accordions_es_co);
      case 'hi-IN':
        return of(accordions_hi_in);
      case 'zh-CN':
        return of(accordions_zn_cn);
      default:
        return of([]);
    }
  }
}
