import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Accordion } from './accordion.interface';
import { accordions } from './accordion.mock';

@Injectable({
  providedIn: 'root',
})
export class AccordionService {
  constructor() {}

  getAccordionData(): Observable<any> {
    return new Observable<Accordion[]>((subscriber) =>
      subscriber.next(accordions)
    );
  }
}
